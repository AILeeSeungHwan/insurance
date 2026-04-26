import { Field, NumberInput, Select, Result, useCalc, numberFmt } from './widgetKit'

// 운전자보험 핵심 보장: 교통사고처리지원금, 변호사선임비, 벌금
const BASE = { fine: 2000, attorney: 5000, settlement: 30000 } // 만원 단위 권장 기본치
export default function DriverLiabilityNeed() {
  const [s, bind] = useCalc({ drivingIntensity: 'mid', isCommercial: 'no' })
  const mul = s.drivingIntensity === 'high' ? 1.3 : s.drivingIntensity === 'low' ? 0.8 : 1.0
  const biz = s.isCommercial === 'yes' ? 1.2 : 1.0
  const fine = Math.round(BASE.fine * mul * biz)
  const atty = Math.round(BASE.attorney * mul * biz)
  const sett = Math.round(BASE.settlement * mul * biz)
  return (
    <div>
      <div style={{ fontSize:18, fontWeight:800, marginBottom:12, color:'#111827' }}>🛡️ 운전자보험 필요 한도 계산기</div>
      <Field label="주행 강도"><Select value={s.drivingIntensity} onChange={bind('drivingIntensity')} options={[
        {value:'low',label:'주말 위주·연 7,000km 이하'},{value:'mid',label:'평일 출퇴근·연 1만~1.5만km'},{value:'high',label:'영업 주행·연 2만km 이상'}]} /></Field>
      <Field label="상업용 주행 여부 (택시/배달/화물 등)"><Select value={s.isCommercial} onChange={bind('isCommercial')} options={[{value:'no',label:'아니오'},{value:'yes',label:'예'}]} /></Field>
      <Result
        label="권장 보장 한도 (참고)"
        value={`벌금 ${numberFmt(fine)} / 변호사 ${numberFmt(atty)} / 처리지원금 ${numberFmt(sett)}`}
        unit="만원"
        caveat="12대 중과실(특히 보행자 사고) 발생 시 형사합의금이 수천만 원 이상 청구되는 사례가 있습니다. 담보별 최대 한도는 상품별로 다릅니다."
      />
    </div>
  )
}
