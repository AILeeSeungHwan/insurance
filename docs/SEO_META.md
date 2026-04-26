# SEO_META.md — 보험모아 SEO 규칙

## 기본 메타
- Title ≤ 60자, 패턴 `{상품명/카테고리/비교} {핵심 정보} — 보험모아`
- Description ≤ 155자, 숫자·기준일 포함
- Canonical (PostRenderer 자동)
- OG / Twitter Card / Naver(Yeti) / Daum 메타 (Layout 자동)

## JSON-LD (도메인 특화)

| 페이지 | 스키마 |
|---|---|
| 모든 페이지 | `Organization`, `WebSite` (Layout) |
| 모든 상세 | `Article`, `BreadcrumbList` |
| FAQ 섹션 있음 | `FAQPage` (자동) |
| 상품 상세 | `FinancialProduct` (금리/수익률 단정값 절대 X) |
| 보험사 상세 | `FinancialService` |
| 계산기 상세 | `WebApplication` |
| 청구 가이드 | `HowTo` (steps 있을 때) |

## 보험업법 준수
- `FinancialProduct.feesAndCommissionsSpecification`은 일반 설명 텍스트만
- `interestRate` / `annualPercentageRate` 같은 단정값 사용 금지

## 내부 링크 전략
- 상품 → 카테고리 / 비교 / 계산기 / 가이드
- 카테고리 → 해당 카테고리 상품 + 관련 계산기 + 관련 상황
- 상황 허브 → 추천 카테고리 / 가이드 / 계산기 / Addon
- 비교 → 각 비교 대상 상품 상세
- 모든 페이지 → 관련 계산기 최소 1개

## 앵커 포스트
- `/compare/silson-2026/` — 실손 비교
- `/compare/car-direct-2026/` — 자동차 다이렉트
- `/categories/cancer/` — 암보험
- `/tools/silson-premium/` — 실손 보험료 추정
- `/guides/silson-claim-howto/` — 실손 청구
- `/situations/newlywed/` — 신혼

## URL 규칙
- 소문자 영문 + 하이픈
- 슬러그에 숫자 ID 금지
- 한국어 슬러그는 상황 허브·일부 가이드에 한해 제한적 허용
