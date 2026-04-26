# DATA_SCHEMA.md — 보험모아 데이터 스키마

## 6+2 엔티티 구조

| Prefix | 엔티티 | 경로 | YMYL |
|---|---|---|---|
| `K####` | Category (보험종류) | `/categories/{slug}/` | B |
| `P####` | Product (보험상품) | `/products/{slug}/` | A |
| `C####` | Company (보험사) | `/companies/{slug}/` | B |
| `H####` | SituationHub (상황허브) | `/situations/{slug}/` | B |
| `T####` | Tool (계산기) | `/tools/{slug}/` | B |
| `M####` | Compare (비교) | `/compare/{slug}/` | A/B |
| `G####` | Guide (가이드) | `/guides/{slug}/` | B |
| `A####` | Addon (보조 생활) | `/addons/{slug}/` | C (쿠팡 전용) |

## InsuranceProduct (P)
```js
{ slug, productName, productNameAlias, companySlug, companyName, categorySlug, categoryLabel,
  productType, ymylLevel:'A', publishedAt, updatedAt, publicDisclosureDate,
  tags:[], verificationRequired, relatedProductSlugs, relatedCategorySlug, relatedToolSlugs }
```

## InsuranceCategory (K)
```js
{ slug, categoryName, categoryLabel, ymylLevel:'B', publishedAt, updatedAt, publicDisclosureDate,
  tags, relatedProductSlugs, relatedToolSlugs, relatedGuideSlugs, relatedSituationSlugs }
```

## InsuranceCompany (C)
```js
{ slug, companyName, companyType:'생명보험'|'손해보험', establishedYear, officialWebsite,
  ymylLevel:'B', publishedAt, updatedAt, publicDisclosureDate, tags }
```

## SituationHub (H)
```js
{ slug, ymylLevel:'B',
  recommendedCategorySlugs, recommendedToolSlugs, recommendedGuideSlugs, recommendedAddonSlugs }
```

## Tool (T)
```js
{ slug, calculator: 'silson-premium' | ..., ymylLevel:'B', tags }
```

## Compare (M)
```js
{ slug, compareType:'상품 vs 상품'|'카테고리 vs 카테고리'|'조건별 TOP 비교',
  ymylLevel:'A'|'B', publicDisclosureDate, relatedCategorySlug, relatedToolSlugs }
```

## Guide (G)
```js
{ slug, guideType:'claim'|'howto'|'tax'|'explainer', steps?:[{name,text}],
  ymylLevel:'B', relatedCategorySlug, relatedToolSlugs }
```

## Addon (A)
```js
{ slug, addonCategory, relatedInsuranceCategorySlugs,
  coupangSearchQuery, coupangProductKey, ymylLevel:'C' }
```

## 본문 섹션 타입
| type | 용도 |
|---|---|
| `intro` | 인트로 단락 (HTML) |
| `toc` | 자동 목차 |
| `h2` / `h3` | 소제목 (id, text) |
| `body` | 본문 단락/표/리스트 |
| `info` | 🔵 파란 정보 박스 |
| `warning` | 🟡 노란 주의 박스 (면책·제외 사항) |
| `risk` / `emergency` | 🔴 빨간 리스크 박스 (원금손실·갱신 급등 등) |
| `callout` | 일반 강조 박스 |
| `sources` | 출처 리스트 |
| `faq` | FAQ (JSON-LD 자동) |
| `medDisclaimer` / `disclaimer` | 보험 면책 (필수 마지막) |
| `productSlot` | 쿠팡 자리 표시 (productKey 매칭) |
| `cta` | 쿠팡 CTA (어드민 매칭) |

## 광고는 자동 — `type:'ad'` 사용 금지

광고는 PostRenderer가 H2 인덱스에 따라 자동 삽입합니다.
