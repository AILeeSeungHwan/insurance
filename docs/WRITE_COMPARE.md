# WRITE_COMPARE.md — 비교 포스트 작성 규칙

YMYL Level A 또는 B. 사이트의 핵심 앵커.

## 비교 유형
- 상품 vs 상품 (Level A)
- 카테고리 vs 카테고리 (Level B)
- 조건별 TOP (Level A)

## 필수 섹션 순서
1. `intro` — 비교 목적 / 독자 정의 + 면책
2. `toc`
3. `h2` 비교 기준 (공시일, 연령·성별 등 동일 조건 가정)
4. `h2` 비교 매트릭스 (대형 표)
5. `h2` 항목별 해설 (각 항목 H2 또는 H3)
6. `h2` 타겟별 추천 (참고)
7. `warning` 보험료만 보지 말 것 등 주의
8. `h2` FAQ
9. `sources` — 공시 기준
10. `medDisclaimer`

## 분량
- 3,500자 이상

## 금지
- "1등", "최고", "무조건 ○○ 회사" 단정
- 출처 없는 임의 수치
- 한 회사만 "추천" 단정 표현

## 메타 필수 필드
```
{ id, slug, compareType, ymylLevel, publicDisclosureDate,
  relatedCategorySlug, relatedToolSlugs }
```
