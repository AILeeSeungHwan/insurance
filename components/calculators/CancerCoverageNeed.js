import { Field, NumberInput, Result, useCalc, numberFmt } from './widgetKit'

// 암 진단비 적정선 = 1년 소득 공백 + 고가 항암 치료비 대비 + 비급여 비중
export default function CancerCoverageNeed() {
  const [s, bind] = useCalc({ monthlyIncome: 350, monthlyExpense: 250, treatmentMonths: 12, otherSavings: 1000 })
  const incomeGap = Math.max(0, (s.monthlyIncome - s.monthlyExpense) * s.treatmentMonths) // 일하지 못할 경우 수입-지출 공백 × 개월
  const medicalBuffer = 2500 // 비급여 항암·신약 대비 일반 기대치(만원) — 대략
  const need = Math.max(0, medicalBuffer + (s.monthlyExpense * s.treatmentMonths) - s.otherSavings - incomeGap)
  return (
    <div>
      <div style={{ fontSize:18, fontWeight:800, marginBottom:12, color:'#111827' }}>🎗️ 암 진단비 적정선 계산기</div>
      <Field label="월 실수령 소득" hint="부부합산이면 가구 소득"><NumberInput value={s.monthlyIncome} onChange={bind('monthlyIncome')} suffix="만원" /></Field>
      <Field label="월 고정 지출" hint="생활비·대출·교육비 등"><NumberInput value={s.monthlyExpense} onChange={bind('monthlyExpense')} suffix="만원" /></Field>
      <Field label="치료·회복 예상 기간"><NumberInput value={s.treatmentMonths} onChange={bind('treatmentMonths')} suffix="개월" /></Field>
      <Field label="활용 가능한 저축/예비자금"><NumberInput value={s.otherSavings} onChange={bind('otherSavings')} suffix="만원" /></Field>
      <Result
        label="권장 암 진단비 한도 (참고)"
        value={numberFmt(need)} unit="만원"
        caveat="실제 필요 한도는 암 종류(유사·소액암/일반암/고액암)·가족력·치료법 선택에 따라 다릅니다. 진단비는 가입금액이 클수록 보험료가 급등하니 균형 필요."
      />
    </div>
  )
}
