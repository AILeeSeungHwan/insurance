import { Field, NumberInput, Result, useCalc, numberFmt } from './widgetKit'

// 갱신형 장기 보험료 인플레 영향: 현재 월보험료 × 5년마다 N% 인상을 years년간 누적
export default function InflationRenewalSim() {
  const [s, bind] = useCalc({ current: 80000, renewEvery: 5, bumpPct: 30, years: 25 })
  let m = s.current
  const cycles = Math.floor(s.years / s.renewEvery)
  for (let i = 0; i < cycles; i++) m = m * (1 + s.bumpPct / 100)
  return (
    <div>
      <div style={{ fontSize:18, fontWeight:800, marginBottom:12, color:'#111827' }}>📈 갱신형 보험료 인플레이션 시뮬레이션</div>
      <Field label="현재 월 보험료"><NumberInput value={s.current} onChange={bind('current')} suffix="원" step={1000} /></Field>
      <Field label="갱신 주기"><NumberInput value={s.renewEvery} onChange={bind('renewEvery')} suffix="년" /></Field>
      <Field label="갱신 때마다 인상률" hint="실손 4세대 평균 5년 20~40% 인상 사례"><NumberInput value={s.bumpPct} onChange={bind('bumpPct')} suffix="%" /></Field>
      <Field label="시뮬레이션 기간"><NumberInput value={s.years} onChange={bind('years')} suffix="년" /></Field>
      <Result
        label={`${s.years}년 후 예상 월 보험료`}
        value={numberFmt(m)} unit="원"
        caveat="최근 실손·암보험 갱신보험료는 물가보다 빠르게 인상되는 경향이 있습니다. 비갱신형이 초기 보험료는 높지만 고령기 총 납입액은 낮아질 수 있습니다."
      />
    </div>
  )
}
