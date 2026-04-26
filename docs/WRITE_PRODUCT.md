# WRITE_PRODUCT.md — 보험상품 포스트 작성 규칙

YMYL Level A. 가장 엄격한 정확성 기준.

## 필수 섹션 순서
1. `intro` — 한눈에 보기 + 면책 한 줄
2. `toc`
3. `h2` 한눈에 보기 (표 형식 권장)
4. `h2` 어떤 보험인가 (Level A 설명 + 카테고리 링크)
5. `h2` 주계약 보장 내용
6. `h2` 주요 특약
7. `h2` 가입 조건 / 연령 / 지급조건
8. `h2` 보험료 예시 표 — 성별·연령·보장기간·기준일 병기
9. `warning` (면책·면책기간·주의)
10. `h2` 청구 절차 요약 (가이드 페이지로 링크)
11. `h2` 비슷한 상품 비교 (compare 페이지로 링크)
12. `h2` FAQ (5~8개)
13. `sources` — 공식 공시실 출처
14. `medDisclaimer`

## 분량 / 톤
- 2,500자 이상
- "추천", "최고", "무조건"같은 단정 표현 절대 금지
- 보험료는 "{성별} {연령} 기준, 공시 기준일 YYYY-MM-DD" 병기
- 갱신형/비갱신형 명시
- `verificationRequired: true`로 검증 미완료 표시 가능

## 메타 필수 필드
```
{ id, slug, productName, productNameAlias, companySlug, companyName, 
  categorySlug, categoryLabel, productType, ymylLevel: 'A',
  publishedAt, updatedAt, publicDisclosureDate, tags }
```

## 출처
- 해당 보험사 공시실 1개
- 협회 공시실(생보/손보) 1개 이상
- 금감원 금융상품통합비교공시 권장
