import { Field, NumberInput, Select, Result, useCalc, numberFmt } from './widgetKit'

// 보험료 세액공제: 보장성 보험료 연 100만원 한도, 기본 13.2% (장애인 전용 16.5%)
export default function PremiumTaxCredit() {
  const [s, bind] = useCalc({ monthlyPremium: 80000, disabled: 'no' })
  const annual = Math.min((s.monthlyPremium || 0) * 12, 1000000)
  const rate = s.disabled === 'yes' ? 0.165 : 0.132
  const refund = Math.round(annual * rate)
  return (
    <div>
      <div style={{ fontSize:18, fontWeight:800, marginBottom:12, color:'#111827' }}>💰 보험료 세액공제 절세 계산기</div>
      <Field label="보장성 보험료 (월 납입)" hint="실손·암·운전자 등. 저축성·연금은 별도"><NumberInput value={s.monthlyPremium} onChange={bind('monthlyPremium')} suffix="원" step={1000} /></Field>
      <Field label="장애인 전용 보장성 보험"><Select value={s.disabled} onChange={bind('disabled')} options={[{value:'no',label:'일반 (13.2%)'},{value:'yes',label:'장애인 전용 (16.5%)'}]} /></Field>
      <Result
        label="예상 세액공제 환급액 (연)"
        value={numberFmt(refund)} unit="원"
        caveat="보장성 보험료 연 100만원까지만 공제 대상. 연금저축·IRP는 별도 세액공제 한도(연 900만원 합산). 개인별 소득요건·근로형태에 따라 실제 환급은 달라질 수 있습니다."
      />
    </div>
  )
}
