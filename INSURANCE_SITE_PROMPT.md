# INSURANCE_SITE_PROMPT.md — 보험 사이트 제작용 프롬프트

> **이 프롬프트는 `NEW_SITE_PROMPT.md`의 §1(도메인 특화 부분)을 보험 도메인으로 치환한 본체입니다.**
> `NEW_SITE_PROMPT.md`의 **§2(모든 사이트 공통 규칙) / §3(킥오프 단계) / §4(도메인별 특수성 표) / §5(출력 방식) / §6(콜드스타트 테스트)** 은 그대로 유효합니다.
> 이 파일과 `NEW_SITE_PROMPT.md` 두 개를 함께 Claude Code에 로드하여 사용.
>
> **§2 보강 패치**: 이번 사이트 제작과 함께 반영되어야 할 공통 규칙 업그레이드가 §A 섹션에 포함되어 있습니다. 작업 완료 후 `NEW_SITE_PROMPT.md`의 §2에 이 패치 내용을 병합하세요.

---

# §1-Insurance. 보험 사이트 (insurancemoa / 보험모아) 제작 본체

너는 지금 내 로컬 맥 환경에서 작업하는 수석 프론트엔드/풀스택 엔지니어다.

## 작업 목표

- ambitstock 네트워크 허브형 구조(policy / car / property / card / health 계승)를 기반으로
- 보험 정보 / 비교 / 계산기 / 상황별 추천 / 청구 가이드를 다루는 `insurancemoa` 사이트를 구축한다
- 단순 블로그가 아니라 **"보험상품 DB + 종류별 허브 + 비교 매트릭스 + 보험료 계산기 + 상황별 추천 + 청구 가이드"** 통합 구조
- 핵심 수익: **AdSense 고단가 (보험은 한국 AdSense 최상위 단가 카테고리)** + 제휴 리드 전환 준비
- `car.ambitstock.com/16/` (자동차보험 비교) 수준의 앵커 포스트를 **최소 5개 이상** 확보한다

## 중요 원칙

1. 사이트 전체가 YMYL(Your Money) 최고 등급
   → 보험업법·약관업계 가이드·금감원 광고 규제 준수 필수
   → 이 부분을 타협하면 아무리 포스트가 많아도 색인 탈락 + 광고 제재 리스크
2. 기존 프로젝트(policy / car / property / card / health) 구조 분석 후 최대 재사용
3. 결과물은 "보험모아" 이름의 별도 프로젝트 폴더
4. 대량 포스팅 / 대량 데이터 입력 / SEO 확장 용이 구조
5. 쿠팡 파트너스 제휴 링크는 **보조 카테고리(블랙박스·운전용품·건강용품·상비약·골절보호대·유아안전용품 등)** 에만 연결 — 보험 상품 자체에는 절대 연결하지 않음
6. 코드 수정 전에 먼저 기존 구조 분석 → 재사용/복제/수정 계획 수립 후 작업

---

## [보험 도메인 특수성 — 반드시 반영]

### 1. 보험업법 / 광고 규제 (한국)

> 이 사이트는 "보험대리점/설계사"가 아닌 "보험 정보 큐레이터"로 명확히 포지셔닝한다.

**절대 금지 표현:**
- "원금보장" (연금/저축보험도 금지 — 공시이율 변동성 존재)
- "손해 없음", "확정수익률" (변액보험 확정표현 금지)
- "반드시 가입해야 한다", "꼭 필요하다" (권유 단정)
- "최고의 보험", "무조건 1등" (비교광고 금지 준용)
- 특정 설계사·대리점 추천 서술
- "환급률 100% 이상" 단정 (해지환급금 기준 명시 없이 사용 금지)
- 보험계약 체결·모집 유도 표현

**권장 표현 전환:**
- "가입 전 반드시 확인할 것" → "검토 시 고려할 사항"
- "보장 최고" → "보장 범위가 넓은 편"
- "저렴한 보험료" → "보험료 수준이 낮은 편" / "업계 평균 대비"
- "추천" → "비교 시 고려 가능"

**필수 고지:**
- 모든 페이지 푸터: "본 사이트는 보험 상품을 판매하거나 모집하지 않으며, 게재된 정보는 일반적 설명입니다. 실제 가입 조건·보험료·보장 내용은 각 보험사 약관 및 상품설명서를 확인해야 합니다."
- 공시자료 기준일 명시 (보험료 예시 옆에 반드시)
- 이 사이트가 **광고 수익으로 운영**됨을 `/about/`, `/editorial-policy/` 에 명시

### 2. 상품 정보 정확성 등급 (YMYL Level 3단계)

**Level A — 개별 보험상품 실제 조건 (가장 엄격)**
- 특정 상품의 보험료·보장한도·면책사항·갱신 조건
- 약관 해석 / 청구 절차 / 분쟁 사례
→ **공시실 출처 필수** (생명보험협회, 손해보험협회, 금감원 금융상품통합비교공시, 각 보험사 공시실)
→ "최종 가입 전 약관·상품설명서 확인" 면책 고정 노출
→ 보험료 수치는 반드시 **"기준일 / 가입 조건(성별·연령·보장기간)"** 병기

**Level B — 보험 종류별 일반 정보 (중간)**
- 실손의료보험이란 / 자동차보험 대인배상 이란
- 보험금 청구 일반 절차
- 세액공제 / 연말정산 활용
→ 금감원·협회 공식 자료 우선
→ 일반적 설명으로 한정, 개별 상품 단정 금지

**Level C — 보조 생활 정보 (완화)**
- 운전자보험을 고려하는 상황 (블랙박스 설치 관련 정보)
- 암보험 고민할 때 참고할 건강검진 항목
- 반려동물 보험 전에 체크할 의료비 절감법
→ 커머스 연계 가능 (Level C 보조 콘텐츠 전용)
→ 쿠팡 파트너스 링크는 여기에만 집중

### 3. 보험업 특유 표기 준수

- 보험료는 반드시 **"{성별} {연령} 기준, {공시일}"** 함께 표기
- 상품명은 정식 상품명 그대로 (약어/별칭 사용 시 정식명 병기)
- 갱신형 / 비갱신형 구분
- 만기환급형 / 소멸성 구분
- 순보험료 / 영업보험료 혼동 방지
- "월 만원대부터"(×) → "최저 월 {금액}원, {조건 기준}"(○)

---

## [보험 E-E-A-T 설계]

### Experience
- 청구 사례는 "실제 보험소비자연맹/분쟁조정 공개 사례"만 인용, 개인 경험은 최소화
- 비교 표는 공시실 데이터 기반임을 명시

### Expertise
- 사이트 운영자는 "보험설계사 자격 없음 / 보험 정보 큐레이터" 포지셔닝
- **"보험전문가 감수" 허위 표기 절대 금지**
- 공식 자료 출처 2개 이상 필수:
  - 금감원 금융상품통합비교공시 (finlife.fss.or.kr)
  - 생명보험협회 공시실 (www.klia.or.kr)
  - 손해보험협회 공시실 (www.knia.or.kr)
  - 금감원 보험사기방지 및 보험민원센터
  - 각 보험사 공시실

### Authoritativeness
- 공식 기관 아웃바운드 링크 필수
- 출처 섹션에 URL + 기관명 + 참조일자
- 특정 블로그 / 카페 / 유튜브 인용 금지

### Trustworthiness
- 각 페이지 업데이트 일자
- `/disclaimer/` 페이지는 보험 특화로 별도 작성 (일반 면책과 분리)
- 광고 수익 운영 고지
- 연락처 실존 (오류 신고 창구)

---

## [해야 할 일 — 단계별]

### [1] 로컬 파일 구조 분석

- `/Users/lee/Desktop/Project/` 하위 기존 프로젝트 중 가장 가까운 구조 탐색 (health 우선, 없으면 car / card)
- 사용 기술 스택 파악
- 라우팅·데이터·컴포넌트·템플릿·SEO 메타 처리 방식 분석
- 특히 확인:
  - 리스트 / 상세 / 비교 / 계산기 / 허브 페이지 템플릿
  - 카테고리·필터·정렬 구조
  - 공통 레이아웃 / breadcrumb / PostRenderer
  - JSON-LD 구조화 데이터 구현
  - 데이터 파일 포맷
  - 쿠팡 링크 자동 삽입 파이프라인 (health 기준)
  - `/admin/` 및 `/searchAnalytics/` 구현
- 분석 결과 요약 → insurancemoa 전환 계획 제시

### [2] insurancemoa 프로젝트 생성

- health 프로젝트 복제 → insurancemoa 치환
- 치환 방향:
  - `symptoms` → `products` (보험상품)
  - `otc` → `categories` (보험종류)
  - `supplements` → `companies` (보험사)
  - `products` (health의 Level C 제품) → `addons` (보조 콘텐츠 / 쿠팡 파트너스 전용)
  - `situations` → `situations` (유지, 내용만 보험용)
  - `tools` → `tools` (보험 계산기)
  - `compare` → `compare` (보험 비교 — 이 사이트의 핵심 앵커)
  - `guides` → `guides` (청구 가이드 / 약관 해설)

### [3] 데이터 모델 설계 (6개 엔티티)

#### 3-A. InsuranceProduct (개별 상품)
```
- slug
- productName (정식 상품명)
- productNameAlias (통용 별칭)
- companySlug (보험사 FK)
- categorySlug (보험종류 FK)
- productType (갱신형/비갱신형/만기환급/소멸성)
- mainCoverage (주계약 보장)
- optionalRiders (특약 리스트)
- ageRange (가입가능 연령)
- maxCoverageAmount (보장한도)
- premiumExamples: [
    { age, gender, coverageTerm, paymentTerm, monthlyPremium, publishedDate }
  ]
- exclusions (면책사항)
- waitingPeriod (면책기간)
- renewalCondition (갱신조건 / 보험료 인상 가능성)
- claimProcess (청구 절차)
- uniqueFeatures (상품 고유 특징)
- notRecommendedFor (이런 경우는 신중 검토)
- tags
- faq
- comparableProductSlugs
- sources (공시실 URL + 참조일)
- disclaimer
- ymylLevel: "A"
- updatedAt
- publicDisclosureDate (공시 기준일)
```

#### 3-B. InsuranceCategory (보험종류 허브)
```
- slug (실손/자동차/암/치아/운전자/화재/여행자/상해/종신/정기/연금/어린이/태아/펫/간병/CI/변액 등)
- categoryName
- whatIsIt
- whoNeedsIt (가입 고려 대상)
- whoMayNotNeedIt (가입 신중 고려 대상)
- mainCoverageTypes (주요 보장 유형)
- commonRiders (자주 붙는 특약)
- choicePoints (선택 시 핵심 포인트 5~10개)
- commonMisunderstandings (자주 오해하는 점)
- legalBackground (관련 법규 / 제도 배경)
- premiumFactors (보험료 결정 요인)
- averagePremiumRange (업계 평균 보험료 대략)
- productSlugs (이 카테고리의 상품 slug 리스트)
- relatedCalculatorSlugs
- relatedGuideSlugs
- relatedSituationSlugs
- faq
- sources
- ymylLevel: "B"
- updatedAt
```

#### 3-C. InsuranceCompany (보험사)
```
- slug
- companyName (정식 명칭)
- companyType (생명보험 / 손해보험 / 제3보험)
- establishedYear
- financialSoundness: {
    solvency (지급여력비율, RBC/K-ICS 기준일 병기),
    creditRating,
    customerComplaintIndex (금감원 민원건수 지수)
  }
- mainProductCategories
- productSlugs
- officialWebsite
- claimContactInfo
- sources
- ymylLevel: "B"
- updatedAt
```

#### 3-D. Guide (보험 가이드)
```
- slug
- guideType: "claim" | "term" | "tax" | "howto" | "explainer"
- title
- targetReader
- summary
- sections (section-array)
- relatedCategorySlugs
- relatedProductSlugs
- sources
- faq
- ymylLevel
- updatedAt
```

#### 3-E. SituationHub (상황별 허브)
```
- slug (newlywed / self-employed / freelancer / student / parent / senior / ...)
- situationName
- situationSummary (독자 정의 2~3단락)
- lifeStageContext
- insurancePriorityList (우선순위별 보험 종류)
- budgetGuide (보험료 비중 가이드)
- scenarioCases (2~3개 가상 예시 - 허구임 명시)
- recommendedCategorySlugs
- recommendedGuideSlugs
- recommendedCalculatorSlugs
- recommendedAddonSlugs (쿠팡 연결 Level C)
- faq
- sources
- ymylLevel: "B"
- updatedAt
```

#### 3-F. Addon (보조 생활 콘텐츠 - Level C / 쿠팡 연계 전용)
```
- slug
- title
- category (dashcam / safety-gear / health-tool / car-accessory / baby-safety / senior-care 등)
- relatedInsuranceCategorySlugs
- content (section-array)
- coupangSearchQuery
- coupangProductSlot (PostRenderer가 자동 삽입)
- ymylLevel: "C"
- updatedAt
```

---

## [4] 페이지 타입 구현 (MVP)

### A. 홈 `/`
- 보험 종류 빠른 진입 (실손 / 자동차 / 암 / 치아 / 운전자 / 여행자 TOP 6)
- 인기 계산기 바로가기
- 상황별 허브 진입
- 인기 비교 페이지 (앵커 포스트 노출)
- 최근 업데이트 공시
- 면책 고지 (푸터)

### B. 상품 `/products/`, `/products/{slug}/`
- 허브: 카테고리별 필터 + 보험사별 필터 + 정렬(보험료/보장한도/공시일)
- 상세 섹션 순서:
  1. 한눈에 보기 (카드형: 보장 요약·월 예시 보험료·갱신형 여부·공시일)
  2. 어떤 보험인가 (Level A 설명 + 소속 카테고리 링크)
  3. 주계약 보장 내용
  4. 주요 특약
  5. 가입 조건 / 연령 / 지급조건
  6. 보험료 예시 표 (성별·연령·보장기간·기준일 병기)
  7. **[경고 박스] 면책사항·면책기간·주의사항**
  8. 청구 절차 요약 (청구 가이드로 링크)
  9. 비슷한 상품 비교 (비교 페이지로 링크)
  10. FAQ
  11. **공식 공시실 출처** (URL + 참조일)
  12. 면책 문구 (보험 특화)
  13. 관련 카테고리 / 상황 허브 / 가이드

### C. 카테고리 `/categories/`, `/categories/{slug}/`
- 허브 섹션 순서:
  1. 카테고리 개요 (이 보험이란)
  2. 가입 고려 대상 / 신중 고려 대상
  3. 주요 보장 유형 표
  4. 자주 붙는 특약 설명
  5. 선택 시 핵심 포인트 (5~10개, H3 분할)
  6. 자주 오해하는 점
  7. 보험료 결정 요인
  8. 업계 평균 보험료 대략 (기준일 명시)
  9. 이 카테고리의 상품 리스트 (상품 엔티티 연결)
  10. 관련 계산기
  11. 관련 가이드
  12. FAQ
  13. 공식 출처
  14. 면책

### D. 보험사 `/companies/`, `/companies/{slug}/`
- 허브: 보험사 리스트
- 상세:
  1. 한눈에 보기 (설립연도, 지급여력비율(기준일 병기), 주력 상품군)
  2. 회사 개요
  3. 재무건전성 (공시 기반, 단정 표현 금지)
  4. 주요 상품 카테고리
  5. 청구 채널 / 고객센터
  6. 이 보험사의 상품 리스트
  7. 출처 (공시실)
  8. 면책

### E. 가이드 `/guides/`, `/guides/{slug}/`
- 유형: 청구 가이드 / 약관 해설 / 세액공제·연말정산 / 보험금 분쟁 대응 / 보험 기초
- 섹션:
  1. 독자 정의 (2~3단락 인트로)
  2. 배경 / 관련 제도
  3. 단계별 설명 (H2 각 단계, H3 세부)
  4. 체크리스트 박스
  5. 자주 하는 실수
  6. 관련 상품 / 카테고리 / 계산기
  7. FAQ
  8. 출처
  9. 면책

### F. 상황 허브 `/situations/`, `/situations/{slug}/`
- 예: `newlywed / child-birth / self-employed / freelancer / senior-60 / first-car / single-parent / pet-owner / foreign-travel / student`
- 섹션:
  1. 상황 정의 (2~3단락)
  2. 이 시기의 보험 우선순위 (순서 명시)
  3. 예산 가이드 (수입 대비 보험료 비중 일반 가이드)
  4. 가상 시나리오 2~3개 (허구임 명시)
  5. 추천 카테고리 / 가이드 / 계산기
  6. Level C 보조 콘텐츠 (쿠팡 연계)
  7. FAQ
  8. 출처
  9. 면책

### G. 비교 `/compare/`, `/compare/{slug}/` — **사이트 핵심 앵커**
- 허브: 비교 페이지 목록
- 타입:
  - 상품 대 상품 (`/compare/product-a-vs-product-b/`)
  - 카테고리 대 카테고리 (`/compare/실손-vs-정액형/`)
  - 특정 조건 TOP 비교 (`/compare/30대-남성-실손/`, `/compare/유병자-실손/`)
- 섹션:
  1. 비교 목적 / 독자 정의
  2. 비교 기준 명시 (공시일, 조건)
  3. 대형 비교표 (정렬 가능하면 좋음)
  4. 항목별 해설 (각 비교 항목 H2)
  5. 타겟별 추천 (이런 사람에게는 A, 저런 사람에게는 B)
  6. 주의사항
  7. FAQ
  8. 출처
  9. 면책

### H. 계산기 `/tools/`, `/tools/{slug}/` — **RPM 핵심**
최소 10개 이상:
- **실손의료보험료 추정 계산기** (연령·성별 기반)
- **자동차보험료 간이 추정기** (차량 등급·연령·주행거리)
- **운전자보험 필요 한도 계산기** (민형사 보상 범위 기반)
- **암보험 진단비 적정선 계산기** (가계 재무 기반)
- **종신보험 필요 사망보험금 계산기** (부양가족·부채)
- **연금보험 노후자금 필요액 계산기**
- **보험료 세액공제 절세 계산기** (연 100만원 한도)
- **실손보험 자기부담금 계산기**
- **보험료 인플레이션 영향 계산기** (갱신형 장기 보험료 시뮬레이션)
- **해지환급금 vs 납입보험료 계산기**
- **펫보험 예상 보험료 계산기**
- **상속세 대비 종신보험 설계 가이드 계산기**

각 계산기 페이지:
- 위젯 (입력 → 결과)
- 결과 해석 (Level B)
- 한계 고지 (실제 보험료와 차이 있을 수 있음)
- 관련 카테고리 / 상품 / 가이드 링크
- 본문 설명 1,500자 이상
- FAQ
- 면책

### I. 보조 `/addons/{slug}/` — 쿠팡 파트너스 전용 Level C
- 블랙박스 / 전방주시 경보기 / 후방카메라 / 운전자 보조용품 (운전자보험 연계)
- 아기 카시트 / 유아 안전용품 (태아·어린이보험 연계)
- 시니어 낙상방지 용품 / 비상벨 (간병보험 연계)
- 반려동물 건강 체크 용품 / 펫 보험 연계
- 여행자용 복대·안전용품 (여행자보험 연계)

### J. 필수 법적 페이지
`/about/`, `/editorial-policy/`, `/disclaimer/` (보험 특화), `/privacy/`, `/terms/`, `/contact/`, `/authors/{slug}/`

---

## [5] SEO 구조 (§2 공통 규칙 + 보험 특화 추가)

### 기본 메타
- Title ≤ 60자. 패턴: `{상품명/카테고리/비교} {핵심 정보} — 보험모아`
- Description ≤ 155자, 숫자·기준일 포함
- Canonical
- Open Graph + Twitter Card
- breadcrumb

### 보험 특화 JSON-LD

| 페이지 | 스키마 |
|---|---|
| 상품 상세 | `FinancialProduct` (type: "InsuranceAgency" 가 없으므로 `FinancialProduct` 사용) + `Offer` + `Organization`(제공 보험사) |
| 카테고리 허브 | `Article` + `BreadcrumbList` + `FAQPage` |
| 보험사 | `Organization` + `FinancialService` |
| 가이드 (청구/절차) | `HowTo` |
| 비교 | `Article` + `FAQPage` + (선택) `Table` 마이크로데이터 |
| 계산기 | `WebApplication` + `SoftwareApplication` + `HowTo` (사용법) |

#### FinancialProduct 스키마 예시 (보험상품)
```json
{
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  "name": "정식 상품명",
  "provider": { "@type": "Organization", "name": "{보험사명}" },
  "feesAndCommissionsSpecification": "보험료는 성별·연령·보장기간에 따라 상이",
  "annualPercentageRate": null,
  "url": "https://insurancemoa.com/products/{slug}/"
}
```

단, **"금리/수익률 단정 값"을 FinancialProduct 스키마에 넣지 않는다.** 구조화 데이터에도 보험업법 수준의 보수성 적용.

### 내부 링크 전략
- 상품 → 카테고리 / 비교 / 계산기 / 가이드
- 카테고리 → 해당 카테고리 상품 전부 / 관련 계산기
- 상황 허브 → 관련 카테고리 / 가이드 / 계산기 / Addon (쿠팡)
- 비교 → 각 비교 대상 상품 상세
- 모든 페이지 → 관련 계산기 최소 1개

### 앵커 포스트 (사이트 전체 링크 집중)
1. `/compare/실손의료보험-비교-{현재연도}/` — 최대 수요
2. `/compare/자동차보험-다이렉트-비교/`
3. `/categories/암보험/` (카테고리 허브 중 최고 단가)
4. `/tools/sonar/실손의료보험료-추정/`
5. `/guides/실손-청구-방법/` — 검색 수요 최상위
6. `/situations/newlywed/` — 상황 허브 중 최고

### URL 규칙
- 소문자 영문 + 하이픈 (health 규칙 계승)
- 슬러그에 숫자 ID 금지 (car 규칙 계승)
- 한국어 슬러그는 상황 허브·가이드에 한해 제한적 허용 (검색 노출 고려)

---

## [6] 수익화 구조

### AdSense 배치 (§2 공통 규칙 준수, 보험 도메인 추가)
- 보험 카테고리는 단가 최상위권 → 포스트당 최대 광고 수는 유지(3개)하되, **Multiplex(autorelaxed) 광고를 적극 활용**
- 비교 페이지는 체류시간이 길어 **사이드 sticky 광고 효과 큼** → SideAd 필수

### 보험 특화 고단가 확보 레버
1. **자동차보험 다이렉트 비교** — 한국 AdSense 최상위 단가
2. **실손의료보험 비교** — 재가입 수요 상시
3. **운전자보험 + 블랙박스 Addon** — AdSense + 쿠팡 이중 수익
4. **암보험 / 치아보험** — 고관여 상품, 체류시간 긺
5. **펫보험** — 신흥 고성장 카테고리, 경쟁 적음
6. **외국인 여행자보험** — 계절성 강함, 영어 키워드 병행 시 RPM 급상승
7. **연금보험 / IRP·퇴직연금 설명** — 노후 관련 장기 포스트

### 쿠팡 파트너스 (Level C 전용)
- 보험 상품 자체에는 절대 연결 금지
- 보조 카테고리에만:
  - 자동차보험 + 블랙박스 / 전방주시경보기 / 후방카메라
  - 운전자보험 + 안전벨트 패드 / 비상탈출망치
  - 치아보험 + 전동칫솔 / 치실 / 치아 미백기
  - 암보험 + 건강검진 가이드북 / 가정용 체중·혈압계
  - 태아·어린이보험 + 유아 카시트 / 아기 안전 게이트
  - 간병보험 + 시니어 낙상 방지 용품 / 보행기
  - 여행자보험 + 여행용 복대 / 해외용 어댑터 / 비상 약통
- `coupang_links` 테이블 운영은 health 방식 그대로

### 제휴 리드 확장 (2단계, 초기에는 미구현)
- 보험 비교 API 연동 (보맵 / 토스 / 인슈넷 등)은 **본 MVP 범위 외**
- 초기에는 AdSense + 쿠팡 파트너스만 집중

---

## [7] 초기 샘플 데이터

최소:
- **InsuranceCategory 15개**: 실손의료 / 자동차 / 암 / 치아 / 운전자 / 화재 / 여행자 / 상해 / 종신 / 정기 / 연금 / 어린이·태아 / 펫 / 간병·장기요양 / CI(중대질병)
- **InsuranceProduct 15개**: 카테고리별 1개씩 대표 상품 (공시실 검증 TODO 플래그 허용)
- **InsuranceCompany 10개**: 삼성생명 / 한화생명 / 교보생명 / 신한라이프 / NH농협생명 / 삼성화재 / 현대해상 / DB손해보험 / KB손해보험 / 메리츠화재
- **Guide 6개**: 실손 청구 방법 / 자동차보험 사고처리 / 보험료 세액공제 / 갱신형 vs 비갱신형 / 해지환급금 이해 / 보험금 분쟁 대응
- **SituationHub 6개**: 신혼부부 / 출산·육아 / 자영업자 / 프리랜서 / 60세 이상 시니어 / 첫차 구입
- **Tool 10개** (위 계산기 목록)
- **Compare 6개**: 실손 비교 / 자동차보험 다이렉트 / 암보험 TOP 비교 / 치아보험 비교 / 운전자보험 비교 / 펫보험 비교
- **Addon 8개**: 블랙박스 / 전방주시경보기 / 전동칫솔 / 유아 카시트 / 시니어 낙상방지 / 여행용 복대 / 반려동물 건강체크 / 가정용 혈압계

샘플 데이터 작성 시:
- 공시실 기반 + 미검증 수치는 `verificationRequired: true` TODO 플래그
- 허위 단정 금지
- 제품명은 공식 표기

---

## [8] Scaled Content Abuse 회피

- 하루 최대 5개 포스트 (신규 오픈 2주 하루 2~4개)
- 동일 카테고리 연속 발행 금지
- 각 포스트 고유 가치 1조각 필수 (비교표 / 계산 결과 / 공시 인용)
- 비교 포스트는 실제 공시 수치 기반이어야 함 (단순 상품명 나열 금지)
- 월 1회 이상 기존 포스트 10개 이상 업데이트 (공시 기준일 갱신)

---

## [9] 작업 단계

1. 기존 사이트 구조 분석 (health 우선)
2. insurancemoa 복제 / 리네이밍 / 브랜드 치환
3. 데이터 모델 6개 엔티티 구현
4. 포스팅 마스터 템플릿 작성 (/templates/ 폴더)
   - product / category / company / guide / situation / compare / tool / addon 각 1개씩
5. 페이지 템플릿 구현 (상품 → 카테고리 → 보험사 → 가이드 → 상황 → 비교 → 계산기 → Addon 순)
6. 샘플 데이터 입력
7. SEO 메타 / JSON-LD (FinancialProduct 포함)
8. 쿠팡 파트너스 통합 모듈 (health 방식 그대로, Addon에만 연결)
9. **§A 패치 반영**: favicon/ico 세트, OG 이미지 시스템, sitemap 자동화, RSS 자동화, 브라우저 메타 (아래 §A 참조)
10. 필수 법적 페이지 (보험 특화 disclaimer)
11. 검색엔진 등록 준비
12. 로컬 실행 확인

---

## [10] 최종 목표

"ambitstock 허브형 구조를 계승하고, 보험업법·금감원 가이드·공시자료 기준을 준수하면서, 보험 상품·카테고리·비교·계산기·상황별 허브·청구 가이드를 통합한 insurancemoa 사이트를 로컬에서 바로 실행 가능한 상태로 만든다. 검색엔진(구글·네이버·다음·빙) 상위 노출에 필요한 모든 기술적·콘텐츠적 요건을 구비한다. AdSense 고단가 + 쿠팡 파트너스 보조 수익의 이중 구조를 갖춘다."

---

# §A. 공통 규칙 업그레이드 패치 (모든 사이트 적용 - NEW_SITE_PROMPT.md §2 병합 대상)

> 이 §A 섹션은 이번 보험 사이트 제작부터 **모든 신규·기존 사이트에 공통 적용**되어야 합니다.
> 작업 완료 후 `NEW_SITE_PROMPT.md`의 §2에 아래 내용을 병합하세요.

## §A-1. favicon / ico 완전 세트 (Daum 구형 검색엔진 대응 포함)

**문제:** Daum(구형 크롤러)은 `<link rel="icon">` 의 PNG/SVG를 제대로 인식하지 못한다. 반드시 `/favicon.ico` 가 **루트 최상단에 물리적으로 존재**해야 하고, HTML head에 정확히 선언되어야 한다.

### 필수 파일 (public/ 루트)
```
public/
├── favicon.ico                     # 16×16, 32×32, 48×48 멀티 사이즈 ICO (Daum 필수)
├── favicon-16x16.png
├── favicon-32x32.png
├── favicon-96x96.png               # Naver·기타 한국 서비스 대응
├── apple-touch-icon.png            # 180×180, iOS 홈화면
├── android-chrome-192x192.png
├── android-chrome-512x512.png
├── safari-pinned-tab.svg           # 모노크롬 SVG (Safari 탭)
├── mstile-150x150.png              # Microsoft Edge 타일
├── browserconfig.xml               # Microsoft tile 설정
└── site.webmanifest                # PWA / Android 홈 추가
```

### `pages/_document.js` 헤드 선언 (순서 중요)
```jsx
<Head>
  {/* Daum 구형 대응 — ico 가장 먼저 */}
  <link rel="shortcut icon" href="/favicon.ico" />
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />

  {/* 현대 브라우저 */}
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />

  {/* iOS / Android */}
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#{브랜드 컬러}" />

  {/* Microsoft */}
  <meta name="msapplication-TileColor" content="#{브랜드 컬러}" />
  <meta name="msapplication-config" content="/browserconfig.xml" />

  {/* PWA */}
  <link rel="manifest" href="/site.webmanifest" />
  <meta name="theme-color" content="#{브랜드 컬러}" />
</Head>
```

### `public/site.webmanifest`
```json
{
  "name": "보험모아",
  "short_name": "보험모아",
  "icons": [
    { "src": "/android-chrome-192x192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/android-chrome-512x512.png", "sizes": "512x512", "type": "image/png" }
  ],
  "theme_color": "#{브랜드 컬러}",
  "background_color": "#ffffff",
  "display": "standalone"
}
```

### `public/browserconfig.xml`
```xml
<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
  <msapplication>
    <tile>
      <square150x150logo src="/mstile-150x150.png"/>
      <TileColor>#{브랜드 컬러}</TileColor>
    </tile>
  </msapplication>
</browserconfig>
```

### 생성 스크립트 `scripts/generate-favicons.js`
- 입력: `public/brand-logo.svg` 한 장 (정사각형 브랜드 로고)
- 출력: 위 11개 파일 모두 자동 생성
- 라이브러리: `sharp` + `to-ico`
- 실행: `node scripts/generate-favicons.js`
- **Daum 대응 검증**: 생성 후 `file public/favicon.ico` 명령으로 멀티-사이즈 포함 여부 확인 (16, 32, 48 전부 포함되어야 함)

---

## §A-2. Open Graph / Twitter Card 완전 설정

### 사이트 기본 OG (`lib/seo.js` 또는 `components/Layout.js`)
```jsx
<Head>
  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="보험모아" />
  <meta property="og:locale" content="ko_KR" />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:title" content={ogTitle} />
  <meta property="og:description" content={ogDescription} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content={ogImageAlt} />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={ogTitle} />
  <meta name="twitter:description" content={ogDescription} />
  <meta name="twitter:image" content={ogImage} />

  {/* Naver / Daum 대응 (비공식이지만 유용) */}
  <meta name="author" content="보험모아" />
  <meta name="copyright" content="보험모아" />
  <meta name="subject" content={ogTitle} />
</Head>
```

### OG 이미지 자동 생성 (포스트별)

**방식:** Next.js API route (`/api/og/[...slug].js`) 에서 동적 SVG → PNG 생성
- 라이브러리: `@vercel/og` 또는 `satori` + `resvg`
- 규격: 1200×630, 30KB 이하
- 구성:
  - 좌측: 사이트 로고 + 카테고리명 (상단)
  - 중앙: 포스트 제목 (최대 2줄, 자동 줄바꿈)
  - 하단: 도메인 표시 (`insurancemoa.com`)
  - 배경: 브랜드 그라디언트
- 포스트 프론트매터의 `ogImage` 가 지정 안 되어 있으면 자동 경로 사용: `/api/og/products/{slug}.png` 등

### OG 이미지 대체 (정적 폴백)
- `public/og-default.png` — 사이트 기본 OG
- 생성 실패 시 폴백으로 사용

### 포스트별 OG 메타 규칙
| 필드 | 규칙 |
|---|---|
| og:title | 한글 50~60자 (Title과 동일 가능) |
| og:description | 한글 90~110자 (Meta description 보다 조금 짧게) |
| og:image | 동적 OG API URL 또는 포스트 전용 이미지 |
| og:type | `article` (상세 페이지) / `website` (허브) |
| article:published_time | ISO 8601 |
| article:modified_time | ISO 8601 |
| article:section | 카테고리명 |
| article:tag | 태그 다중 허용 |

---

## §A-3. sitemap.xml 자동 생성 / 갱신

### 파일: `scripts/generate-sitemap.js`

**트리거:**
1. 빌드 시 자동: `next.config.js` 의 `webpack` 훅 또는 `prebuild` npm script
2. 포스트 발행 후: `node scripts/generate-sitemap.js` 수동/launchd 실행
3. Supabase 변경 후: `/api/admin/rebuild-sitemap` (어드민 전용)

### 구조: 분할 sitemap (대량 대응)

```
/sitemap.xml              → 인덱스 (각 서브 sitemap 참조)
/sitemap-core.xml         → 홈·카테고리·허브·법적 페이지
/sitemap-products.xml     → 상품 상세
/sitemap-companies.xml    → 보험사
/sitemap-guides.xml       → 가이드
/sitemap-compares.xml     → 비교
/sitemap-tools.xml        → 계산기
/sitemap-situations.xml   → 상황 허브
/sitemap-addons.xml       → Addon
/sitemap-news.xml         → 최근 30일 내 발행·업데이트 (News sitemap 형식)
```

### 각 URL 엔트리
```xml
<url>
  <loc>https://insurancemoa.com/products/{slug}/</loc>
  <lastmod>{updatedAt ISO8601}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
  <!-- 이미지 sitemap 확장 -->
  <image:image>
    <image:loc>{ogImage URL}</image:loc>
    <image:title>{ogTitle}</image:title>
  </image:image>
</url>
```

### Priority 기준
| 페이지 | priority |
|---|---|
| 홈 | 1.0 |
| 카테고리 허브 | 0.9 |
| 앵커 포스트 (비교·핵심 계산기) | 0.9 |
| 일반 상세 포스트 | 0.8 |
| Addon / 상황 허브 | 0.7 |
| 법적 페이지 | 0.3 |

### 검증
- 빌드 후 자동: `xmllint --noout public/sitemap*.xml`
- GSC 제출 URL: `https://insurancemoa.com/sitemap.xml` (인덱스)
- Naver Search Advisor 제출: 동일 URL

---

## §A-4. rss.xml / atom.xml 자동 업데이트

### 파일
- `public/rss.xml` — RSS 2.0
- `public/atom.xml` — Atom 1.0 (Naver 선호)

### 생성 스크립트: `scripts/generate-feeds.js`
- 최근 30개 포스트 (모든 엔티티 통합) 시간순 정렬
- 빌드 시 자동 + 포스트 발행 후 수동/launchd 실행

### RSS 필드
```xml
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>보험모아</title>
    <link>https://insurancemoa.com/</link>
    <description>보험 비교·계산·청구 가이드</description>
    <language>ko-KR</language>
    <atom:link href="https://insurancemoa.com/rss.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>{RFC822}</lastBuildDate>
    <image>
      <url>https://insurancemoa.com/favicon-96x96.png</url>
      <title>보험모아</title>
      <link>https://insurancemoa.com/</link>
    </image>
    <item>
      <title>{포스트 타이틀}</title>
      <link>{절대 URL}</link>
      <guid isPermaLink="true">{절대 URL}</guid>
      <pubDate>{RFC822}</pubDate>
      <category>{카테고리명}</category>
      <description>{요약}</description>
      <content:encoded><![CDATA[{HTML 일부}]]></content:encoded>
    </item>
  </channel>
</rss>
```

### HEAD 선언 (`pages/_document.js`)
```jsx
<link rel="alternate" type="application/rss+xml" title="보험모아 RSS" href="/rss.xml" />
<link rel="alternate" type="application/atom+xml" title="보험모아 Atom" href="/atom.xml" />
```

### 배포 플로우 (launchd 자동화)
```
포스트 생성 (data/ 추가)
  → node --check posts/{entity}/{slug}.js
  → node scripts/generate-sitemap.js
  → node scripts/generate-feeds.js
  → git commit
  → git push (Vercel 자동 빌드)
  → Vercel 빌드 중 prebuild hook 으로 sitemap·feeds 재생성 (이중 안전망)
  → 빌드 완료 후 /api/notify-search-engines 호출
      - Google Indexing API (지원 대상 페이지만)
      - IndexNow (Bing·Yandex·Naver 일부 지원)
      - Ping: pingomatic·feedburner 등 (선택)
```

---

## §A-5. 검색엔진별 최적화

### Google
- GSC 등록, sitemap 인덱스 제출
- Core Web Vitals 모니터링 (LCP ≤ 2.5s, CLS ≤ 0.1, INP ≤ 200ms)
- Rich Results Test 통과 확인
- Structured Data 오류 0 유지
- IndexNow / Indexing API 호출 (실시간 색인)

### Naver
- Search Advisor 등록
- **`<meta name="NaverBot" content="All" />`** 헤드 추가 (권장)
- **`<meta name="Yeti" content="index,follow" />`** (Naver 크롤러 명시 허용)
- Naver 공식 가이드 준수:
  - 한글 메타 description 적극 활용
  - Open Graph 완전 세팅 (Naver 블로그 공유 시 활용)
  - RSS·Atom 제출
- 모바일 대응 철저 (Naver는 모바일 우선)
- 사이트 인증 후 **"수집 요청"** 수동 실행 (신규 페이지)

### Daum
- `favicon.ico` 루트 배치 (§A-1)
- Daum 검색등록 신청
- robots.txt, sitemap.xml 접근 가능 확인
- meta description 한글 우선

### Bing
- Bing Webmaster Tools 등록
- GSC 가져오기 기능 활용
- IndexNow API 키 등록 → Vercel 환경변수

---

## §A-6. 로컬 자동화 (launchd) 플로우 확장

```
(1) 포스트 생성 요청 발생
(2) data/ 및 posts/ 파일 추가
(3) node --check posts/{entity}/{slug}.js
(4) data/coupang-seed.json 업데이트 (해당될 때)
(5) node scripts/generate-sitemap.js
(6) node scripts/generate-feeds.js
(7) MEMORY.md 갱신
(8) git commit -m "{type}: {slug} 추가"
(9) git push (Vercel 자동 배포)
(10) 배포 완료 대기 (Vercel Deploy Hook 상태 확인)
(11) /api/notify-search-engines 호출
(12) 작업 로그 기록
```

---

## §A-7. 파일 생성 체크리스트 (사이트 오픈 완료 정의 통합)

NEW_SITE_PROMPT.md §2 의 기존 체크리스트에 아래 항목 추가:

```
기본 파일
☐ public/favicon.ico (16+32+48 멀티사이즈)
☐ public/favicon-16x16.png / favicon-32x32.png / favicon-96x96.png
☐ public/apple-touch-icon.png (180x180)
☐ public/android-chrome-192x192.png / 512x512.png
☐ public/safari-pinned-tab.svg
☐ public/mstile-150x150.png / browserconfig.xml
☐ public/site.webmanifest
☐ public/og-default.png (1200x630)
☐ public/robots.txt
☐ public/ads.txt
☐ public/sitemap.xml (+ 분할 sitemap)
☐ public/rss.xml / atom.xml

스크립트
☐ scripts/generate-favicons.js
☐ scripts/generate-sitemap.js
☐ scripts/generate-feeds.js
☐ scripts/notify-search-engines.js (IndexNow)

HEAD / 메타
☐ _document.js — favicon 선언 11종
☐ _document.js — OG / Twitter Card
☐ _document.js — Naver / Bing 전용 메타
☐ _document.js — RSS / Atom alternate 선언

검증
☐ Rich Results Test: 상품·비교·가이드 각 1개 통과
☐ Lighthouse SEO 점수 ≥ 95
☐ favicon 모든 브라우저 노출 확인 (Chrome·Safari·Edge·Firefox·Naver·Daum)
☐ sitemap xmllint 통과
☐ RSS validator.w3.org 통과

검색엔진 등록
☐ Google Search Console
☐ Naver Search Advisor (Yeti 메타 확인)
☐ Daum 검색등록 (favicon.ico 확인)
☐ Bing Webmaster Tools
☐ IndexNow API 키 등록
```

---

## §A-8. 출력 방식

§2 의 출력 방식을 준수하되, 이번 작업부터는 각 단계 종료 시 다음을 추가로 명시:
- 생성된 파일이 §A-7 체크리스트 어느 항목을 충족했는지
- 남은 체크리스트 항목

---

**이 프롬프트가 준비되면 보험 사이트 제작을 시작하라.
먼저 기존 사이트(health 우선) 구조를 분석하고, 재사용 전략과 전환 계획부터 보여줄 것.
§A 공통 규칙 업그레이드 패치는 insurancemoa 제작과 병행하여 함께 적용할 것.**
