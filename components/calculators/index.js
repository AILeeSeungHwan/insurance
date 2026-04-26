import { useState } from 'react'
import SilsonPremiumEstimator from './SilsonPremiumEstimator'
import CarPremiumEstimator from './CarPremiumEstimator'
import CancerCoverageNeed from './CancerCoverageNeed'
import DriverLiabilityNeed from './DriverLiabilityNeed'
import PremiumTaxCredit from './PremiumTaxCredit'
import PensionRetirementNeed from './PensionRetirementNeed'
import SurrenderValueCompare from './SurrenderValueCompare'
import InflationRenewalSim from './InflationRenewalSim'
import PetInsurancePremium from './PetInsurancePremium'
import CopaymentCalculator from './CopaymentCalculator'

const MAP = {
  'silson-premium':       SilsonPremiumEstimator,
  'car-premium':          CarPremiumEstimator,
  'cancer-coverage-need': CancerCoverageNeed,
  'driver-liability-need':DriverLiabilityNeed,
  'premium-tax-credit':   PremiumTaxCredit,
  'pension-retirement-need': PensionRetirementNeed,
  'surrender-value-compare': SurrenderValueCompare,
  'inflation-renewal':    InflationRenewalSim,
  'pet-insurance-premium':PetInsurancePremium,
  'copayment':            CopaymentCalculator,
}

export default function CalculatorWidget({ calculator }) {
  const Comp = MAP[calculator]
  if (!Comp) {
    return (
      <div style={{ padding:'24px 20px', background:'#F8FAFC', border:'1px solid #E5E7EB', borderRadius:12, marginBottom:22, fontSize:14, color:'#64748B' }}>
        계산기 위젯을 준비 중입니다. (code: {calculator || 'unknown'})
      </div>
    )
  }
  return (
    <div style={{ padding:'22px 24px', background:'#fff', border:'1px solid #E5E7EB', borderRadius:12, marginBottom:22 }}>
      <Comp />
      <p style={{ fontSize:11, color:'#9CA3AF', marginTop:12 }}>
        ※ 본 계산기는 공개 통계·가정값을 기반으로 한 <strong>추정치</strong>입니다. 실제 보험료는 각 보험사 인수 기준·건강고지·차량등급 등에 따라 달라지며, 청약 전 반드시 공식 견적을 확인하세요.
      </p>
    </div>
  )
}
