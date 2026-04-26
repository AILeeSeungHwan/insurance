import { Field, NumberInput, Select, Result, useCalc, numberFmt } from './widgetKit'

// 실손 자기부담금 계산 (4세대 단순화: 급여 20%, 비급여 30% · 최소 공제금액 10,000~30,000원)
export default function CopaymentCalculator() {
  const [s, bind] = useCalc({ coveredCharge: 100000, nonCovered: 60000, visit: 'outpatient' })
  const covRate = 0.20
  const nonCovRate = 0.30
  const minDed = s.visit === 'emergency' ? 30000 : s.visit === 'inpatient' ? 10000 : 10000
  const covCopay = Math.max(s.coveredCharge * covRate, minDed)
  const nonCovCopay = s.nonCovered * nonCovRate
  const myPay = Math.round(covCopay + nonCovCopay)
  const refund = Math.max(0, (s.coveredCharge + s.nonCovered) - myPay)
  return (
    <div>
      <div style={{ fontSize:18, fontWeight:800, marginBottom:12, color:'#111827' }}>💊 실손보험 자기부담금 계산기</div>
      <Field label="진료 유형"><Select value={s.visit} onChange={bind('visit')} options={[
        {value:'outpatient',label:'외래(의원·병원)'},{value:'inpatient',label:'입원'},{value:'emergency',label:'응급실 비응급'}]} /></Field>
      <Field label="급여 항목 총액"><NumberInput value={s.coveredCharge} onChange={bind('coveredCharge')} suffix="원" step={1000} /></Field>
      <Field label="비급여 항목 총액" hint="MRI·도수치료·비급여 주사 등"><NumberInput value={s.nonCovered} onChange={bind('nonCovered')} suffix="원" step={1000} /></Field>
      <Result
        label={`예상 본인 부담 ${numberFmt(myPay)}원`}
        value={numberFmt(refund)} unit="원 실손 청구 가능 (추정)"
        caveat="4세대 실손 기준 단순 계산. 상급종합병원·응급실 비응급 방문은 자기부담 비율이 올라갑니다. 상품세대(1~4세대)와 약관에 따라 실제 보상은 다릅니다."
      />
    </div>
  )
}
