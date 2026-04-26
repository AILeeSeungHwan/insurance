import { Field, NumberInput, Select, Result, useCalc, numberFmt } from './widgetKit'

// 해지환급금 vs 납입보험료 비교 (단순화: 갱신형은 환급 거의 없음, 비갱신형은 납입 80~95%)
const REFUND_RATE = { renewable: 0.0, nonrenew: 0.65, whole: 0.95 }
export default function SurrenderValueCompare() {
  const [s, bind] = useCalc({ monthly: 150000, years: 10, productType: 'nonrenew' })
  const paid = s.monthly * 12 * s.years
  const refund = Math.round(paid * REFUND_RATE[s.productType])
  const net = paid - refund
  return (
    <div>
      <div style={{ fontSize:18, fontWeight:800, marginBottom:12, color:'#111827' }}>📉 해지환급금 vs 납입보험료 계산기</div>
      <Field label="월 납입 보험료"><NumberInput value={s.monthly} onChange={bind('monthly')} suffix="원" step={1000} /></Field>
      <Field label="납입 기간"><NumberInput value={s.years} onChange={bind('years')} suffix="년" /></Field>
      <Field label="상품 유형"><Select value={s.productType} onChange={bind('productType')} options={[
        {value:'renewable',label:'순수 보장 갱신형 (환급 거의 없음)'},
        {value:'nonrenew',label:'비갱신형 저해지환급 (납입 65% 수준)'},
        {value:'whole',label:'종신·저축성 (납입 90% 이상)'}
      ]} /></Field>
      <Result
        label={`총 납입 ${numberFmt(paid)}원 / 예상 환급 ${numberFmt(refund)}원`}
        value={numberFmt(net)} unit="원 손실"
        caveat="환급률은 상품·해지시점·공시이율에 따라 크게 다릅니다. 저축성은 최소 10년 이상 납입해야 원금 도달하는 경우가 많습니다."
      />
    </div>
  )
}
