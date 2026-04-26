import { Field, NumberInput, Select, Result, useCalc, numberFmt } from './widgetKit'

// 자동차보험료 간이 추정: 베이스 + 연령대·차량등급·주행거리 가중
const BASE = 650000 // 연 기준 평균치(대략) — 실제값 아님
const AGE = { '20s':1.6,'30s':1.0,'40s':0.95,'50s':0.95,'60+':1.3 }
const GRADE = { small:0.75, mid:1.0, large:1.35, suv:1.15, electric:1.25 }
const MILEAGE = { low:0.85, mid:1.0, high:1.2 }
const NO_ACCIDENT_DISCOUNT = { '0':1.0, '3':0.85, '7':0.65 }

export default function CarPremiumEstimator() {
  const [s, bind] = useCalc({ ageBand:'30s', grade:'mid', mileage:'mid', noAccidentYears:'3' })
  const annual = Math.round(BASE * AGE[s.ageBand] * GRADE[s.grade] * MILEAGE[s.mileage] * NO_ACCIDENT_DISCOUNT[s.noAccidentYears])
  return (
    <div>
      <div style={{ fontSize:18, fontWeight:800, marginBottom:12, color:'#111827' }}>🚗 자동차보험료 간이 추정기</div>
      <Field label="연령대"><Select value={s.ageBand} onChange={bind('ageBand')} options={[
        {value:'20s',label:'20대'},{value:'30s',label:'30대'},{value:'40s',label:'40대'},{value:'50s',label:'50대'},{value:'60+',label:'60대 이상'}]} /></Field>
      <Field label="차량 등급"><Select value={s.grade} onChange={bind('grade')} options={[
        {value:'small',label:'경·소형'},{value:'mid',label:'중형'},{value:'large',label:'대형'},{value:'suv',label:'SUV'},{value:'electric',label:'전기차'}]} /></Field>
      <Field label="연간 주행거리"><Select value={s.mileage} onChange={bind('mileage')} options={[
        {value:'low',label:'연 7,000km 이하'},{value:'mid',label:'연 7,000~15,000km'},{value:'high',label:'연 15,000km 이상'}]} /></Field>
      <Field label="무사고 연수"><Select value={s.noAccidentYears} onChange={bind('noAccidentYears')} options={[
        {value:'0',label:'0~2년'},{value:'3',label:'3~6년'},{value:'7',label:'7년 이상'}]} /></Field>
      <Result
        label="예상 연 보험료 (추정)"
        value={numberFmt(annual)} unit="원 / 년"
        caveat="실제 보험료는 차량등급·사고이력·운전경력·가입경력에 따라 크게 달라집니다. 반드시 다이렉트 보험사 공식 견적을 확인하세요."
      />
    </div>
  )
}
