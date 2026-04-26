# WRITE_SITUATION.md — 상황 허브 포스트 작성 규칙

YMYL Level B. 라이프 스테이지별 보험 우선순위 안내.

## 필수 섹션 순서
1. `intro` — 상황 정의 + 이 글의 쓰임새 (2~3단락)
2. `toc`
3. `h2` 이 상황이란 / 라이프 스테이지 컨텍스트
4. `h2` 보험 우선순위
5. `h2` 예산 가이드 — 보험료 비중 (수입 대비)
6. `h2` 가상 시나리오 2~3개 (반드시 "허구 예시" 명시)
7. `h2` 추천 카테고리 / 가이드 / 계산기
8. `h2` 보조 생활 정보 (Addon 링크)
9. `h2` FAQ
10. `sources`
11. `medDisclaimer`

## 톤 / 금지
- 시나리오는 반드시 허구 명시 ("실제 인물·사례가 아닙니다")
- 보험료 비중 가이드는 일반론 (개인별 다름 명시)
- 단정 금지

## 메타 필수 필드
```
{ id, slug, ymylLevel: 'B', publishedAt, updatedAt,
  recommendedCategorySlugs, recommendedToolSlugs,
  recommendedGuideSlugs, recommendedAddonSlugs }
```
