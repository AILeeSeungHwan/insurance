# WRITE_COMPANY.md — 보험사 포스트 작성 규칙

YMYL Level B. 객관적 공시 정보 중심. **재무 단정 표현 금지.**

## 필수 섹션 순서
1. `intro` — 회사 개요 1~2단락
2. `toc`
3. `h2` 한눈에 보기 (표)
4. `h2` 회사 개요 / 연혁
5. `h2` 재무건전성 (공시 기반, K-ICS · 자본 · 민원 지표)
6. `h2` 주요 상품 카테고리
7. `h2` 청구 채널 / 고객센터
8. `h2` FAQ
9. `sources`
10. `medDisclaimer`

## 금지
- "가장 안정적", "최고의 보험사" 같은 단정
- 출처 없는 재무 수치 인용

## 메타 필수 필드
```
{ id, slug, companyName, companyType, establishedYear, officialWebsite,
  ymylLevel: 'B', publicDisclosureDate, publishedAt, updatedAt }
```
