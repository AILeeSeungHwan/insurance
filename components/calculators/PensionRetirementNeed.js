import { Field, NumberInput, Result, useCalc, numberFmt } from './widgetKit'

// 노후자금 필요액 = 은퇴 후 월 필요 생활비 × 12 × 수명 − 국민연금 예상 − 퇴직금 예상
export default function PensionRetirementNeed() {
  const [s, bind] = useCalc({ monthlyNeed: 250, lifeYears: 25, publicPension: 80, corpPension: 0 })
  const total = s.monthlyNeed * 12 * s.lifeYears
  const pensionTotal = (s.publicPension + s.corpPension) * 12 * s.lifeYears
  const need = Math.max(0, total - pensionTotal)
  return (
    <div>
      <div style={{ fontSize:18, fontWeight:800, marginBottom:12, color:'#111827' }}>🧓 노후자금 필요액 계산기</div>
      <Field label="은퇴 후 월 필요 생활비" hint="부부 2인 기준 평균 250~300만원"><NumberInput value={s.monthlyNeed} onChange={bind('monthlyNeed')} suffix="만원" /></Field>
      <Field label="예상 노후기간"><NumberInput value={s.lifeYears} onChange={bind('lifeYears')} suffix="년" /></Field>
      <Field label="예상 국민연금 월 수령액"><NumberInput value={s.publicPension} onChange={bind('publicPension')} suffix="만원" /></Field>
      <Field label="예상 개인·퇴직연금 월 수령액"><NumberInput value={s.corpPension} onChange={bind('corpPension')} suffix="만원" /></Field>
      <Result
        label="추가 필요 노후자금"
        value={numberFmt(need)} unit="만원"
        caveat="물가상승률(인플레이션)은 반영하지 않은 단순 추정. 실제는 연 2~3% 인플레이션이 누적되어 필요액이 커집니다. 연금보험·IRP 등 분산 준비 권장."
      />
    </div>
  )
}
