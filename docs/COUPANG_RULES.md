# COUPANG_RULES.md — 쿠팡 파트너스 운영 규칙

## 절대 원칙
1. **보험 상품(P) / 카테고리(K) / 보험사(C) / 비교(M) / 가이드(G) / 계산기(T) 본문에 쿠팡 링크 금지**
2. **Addon(A) 콘텐츠에만 쿠팡 링크 허용**
3. 포스트 `.js` 파일에 쿠팡 URL 직접 기입 금지 — 어드민에서 입력

## 데이터 흐름
```
새 Addon 포스트 생성
   ↓
data/coupang-seed.json 에 제안 항목 추가 (coupang_url: null)
   ↓
어드민 UI "📦 시드 불러오기" → Supabase coupang_links INSERT
   ↓
사용자가 어드민에서 실제 URL 입력
   ↓
포스트 렌더 시점 /api/post-links?slug=... 호출
   ↓
PostRenderer가 productSlot / cta 섹션에 자동 삽입
```

## 매칭 규칙
- `productSlot` 섹션의 `productKey` ↔ DB의 `product_name` 정규화 매칭(공백·하이픈·점 제거)
- 매칭되는 url이 없으면 섹션 자체가 렌더 안 됨

## 포스트 작성 시 (Addon 한정)
- `productSlot` 섹션 1개 권장
- `cta` 섹션 최대 2~3개, 광고 바로 앞뒤 배치 금지
- 푸터 고지 자동 (Layout)

## Supabase coupang_links
```sql
- id BIGSERIAL
- product_name TEXT NOT NULL
- category TEXT
- coupang_url TEXT (NULL 허용)
- post_slugs TEXT[] NOT NULL
- notes TEXT
- created_at TIMESTAMPTZ
```

## 금지
- 보험상품 본문에 CTA 삽입 (Level A 페이지 전체 금지)
- 한 포스트 7개 초과 CTA
- 광고 바로 앞뒤 CTA 배치
