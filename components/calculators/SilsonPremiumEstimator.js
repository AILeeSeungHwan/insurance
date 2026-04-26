import { Field, NumberInput, Select, Result, useCalc, numberFmt } from './widgetKit'

// 실손의료보험료 추정 (공시 기준 대략 평균치 기반 — 실제와 다를 수 있음)
// 근거: 생보/손보협회 공시 통계 범위에서 단순 선형 조정
const BASE = { male: 9000, female: 12000 } // 30대 기준 월 대략
const AGE_MUL = (age) => {
  if (age < 20) return 0.6
  if (age < 30) return 0.8
  if (age < 40) return 1.0
  if (age < 50) return 1.4
  if (age < 60) return 2.1
  if (age < 70) return 3.3
  return 5.0
}
const RENEW_MUL = { '1': 1.0, '5': 1.15, '15': 1.35 }

export default function SilsonPremiumEstimator() {
  const [s, bind] = useCalc({ age: 35, gender: 'male', renewCycle: '5' })
  const monthly = Math.round(BASE[s.gender] * AGE_MUL(s.age) * (RENEW_MUL[s.renewCycle] || 1))
  return (
    <div>
      <div style={{ fontSize:18, fontWeight:800, marginBottom:12, color:'#111827' }}>🧮 실손의료보험료 추정 계산기</div>
      <Field label="성별"><Select value={s.gender} onChange={bind('gender')} options={[{value:'male',label:'남성'},{value:'female',label:'여성'}]} /></Field>
      <Field label="연령" hint="만 나이 기준 (0~80)"><NumberInput value={s.age} onChange={bind('age')} min={0} max={90} suffix="세" /></Field>
      <Field label="갱신주기"><Select value={s.renewCycle} onChange={bind('renewCycle')} options={[{value:'1',label:'1년 갱신'},{value:'5',label:'5년 갱신'},{value:'15',label:'15년 갱신'}]} /></Field>
      <Result
        label="예상 월 보험료 (추정)"
        value={numberFmt(monthly)} unit="원 / 월"
        caveat="4세대 실손 표준 기준 대략값. 기가입·건강고지·특약 선택에 따라 10~30% 이상 달라질 수 있습니다."
      />
    </div>
  )
}
