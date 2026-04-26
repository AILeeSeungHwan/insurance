import { Field, NumberInput, Select, Result, useCalc, numberFmt } from './widgetKit'

const BASE = { dog: 55000, cat: 38000 }
const AGE = (a) => a < 1 ? 0.9 : a < 5 ? 1.0 : a < 8 ? 1.4 : 2.1
const PLAN = { standard: 1.0, premium: 1.6 }

export default function PetInsurancePremium() {
  const [s, bind] = useCalc({ kind: 'dog', age: 3, plan: 'standard' })
  const monthly = Math.round(BASE[s.kind] * AGE(s.age) * PLAN[s.plan])
  return (
    <div>
      <div style={{ fontSize:18, fontWeight:800, marginBottom:12, color:'#111827' }}>🐶🐱 펫보험 예상 보험료 계산기</div>
      <Field label="반려동물"><Select value={s.kind} onChange={bind('kind')} options={[{value:'dog',label:'강아지'},{value:'cat',label:'고양이'}]} /></Field>
      <Field label="나이"><NumberInput value={s.age} onChange={bind('age')} suffix="세" min={0} max={20} /></Field>
      <Field label="플랜"><Select value={s.plan} onChange={bind('plan')} options={[{value:'standard',label:'일반형(통원·입원)'},{value:'premium',label:'프리미엄(슬관절·치과 포함)'}]} /></Field>
      <Result
        label="예상 월 보험료"
        value={numberFmt(monthly)} unit="원 / 월"
        caveat="품종(소형·중형·대형, 단두종), 과거 병력, 갱신 경과에 따라 크게 달라집니다. 슬개골·치과 특약은 별도."
      />
    </div>
  )
}
