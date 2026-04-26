# WRITE_GUIDE.md — 가이드 포스트 작성 규칙

YMYL Level B. 청구·세제·약관 해석 등 절차 안내 중심.

## 가이드 유형
- `claim` — 청구 가이드 (HowTo JSON-LD 자동)
- `howto` — 실무 절차
- `tax` — 세제 / 연말정산
- `explainer` — 갱신/비갱신 등 개념 해설

## 필수 섹션 순서
1. `intro` — 이 가이드의 쓰임새 (2~3단락)
2. `toc`
3. `h2` 배경 / 관련 제도
4. `h2` 단계별 절차 (HowTo: steps 메타로 자동 JSON-LD)
5. `h2` 체크리스트 (`callout`)
6. `h2` 자주 하는 실수
7. `h2` 관련 카테고리 / 계산기
8. `h2` FAQ
9. `sources` — 공식 기관 우선
10. `medDisclaimer`

## 메타 필수 필드 (claim 유형)
```
{ id, slug, guideType: 'claim', steps: [{name, text}, ...],
  ymylLevel: 'B', relatedCategorySlug, relatedToolSlugs }
```

## 분량
- 3,000자 이상 (심화 가이드)
