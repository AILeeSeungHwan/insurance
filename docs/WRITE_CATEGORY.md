# WRITE_CATEGORY.md — 보험종류 포스트 작성 규칙

YMYL Level B. 일반 정보 중심, 단정 금지.

## 필수 섹션 순서
1. `intro` — 카테고리 정의 + 이 글의 쓰임새 (2~3단락)
2. `toc`
3. `h2` 이 보험이란
4. `h2` 보장 구조 / 세대별 차이 (해당 시)
5. `h2` 가입 고려 대상 / 신중 고려 대상
6. `h2` 자주 붙는 특약
7. `h2` 선택 시 핵심 포인트 (5~10개, H3 분할)
8. `h2` 자주 오해하는 점
9. `h2` 보험료 결정 요인 / 업계 평균 대략
10. `h2` 관련 상품 / 계산기 / 가이드 (링크)
11. `h2` FAQ
12. `sources`
13. `medDisclaimer`

## 분량 / 톤
- 2,500자 이상
- 각 H2 아래 실질적 H3 또는 본문(200자+) 필수
- 단정 금지 ("최고", "무조건")
- "보험료 평균"은 공시 자료 출처 명시

## 메타 필수 필드
```
{ id, slug, categoryName, categoryLabel, ymylLevel: 'B',
  publishedAt, updatedAt, publicDisclosureDate,
  relatedProductSlugs, relatedToolSlugs, relatedGuideSlugs, relatedSituationSlugs }
```
