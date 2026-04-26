# CLAUDE.md — insurancemoa (보험모아)

> **세션 역할**: 이 프로젝트 디렉토리에서 열리는 Claude Code 세션은 **insurancemoa 전담**입니다.
> 다른 사이트 작업·크로스 사이트 전략은 이 세션이 맡지 않습니다.
> 세션 시작 시 **이 파일 + `MEMORY.md` + `docs/INSURANCE_ETHICS.md`** 만 기본 로드.
> 작업 종류에 따라 필요한 `docs/WRITE_*.md` 와 해당 `data/*.js` 를 추가 로드.
> 보험 정보는 타협 금지. 단정 표현 금지. 자신 없으면 `verificationRequired: true` 로 표시.

---

## 1. 프로젝트 개요

- **사이트**: insurancemoa.ambitstock.com (보험모아)
- **주제**: 보험종류·상품·보험사·비교·계산기·상황별 허브·청구 가이드 통합 (YMYL Money 최고 등급)
- **수익**: AdSense (보험은 한국 AdSense 최상위 단가) + 쿠팡 파트너스(Addon 한정)
- **스택**: Next.js 14 (pages router) + Supabase + Vercel
- **포지셔닝**: "보험대리점/설계사가 아닌 보험 정보 큐레이터"

---

## 2. 핵심 원칙 (전체 세션 공통)

1. 모든 보험 페이지 = YMYL Money 최고 등급. 잘못된 정보는 금전 손해 + 보장 공백 + 법적 리스크.
2. **단정 금지**. "원금보장"/"확정수익"/"최고"/"무조건 가입"/"환급률 100% 이상" 모두 금지.
3. 보험계약 체결·모집 유도 표현 금지. 정보 제공·비교 큐레이터 톤만.
4. 출처 2개 이상 (금감원·생보협회·손보협회·각 보험사 공시실).
5. **"보험전문가 감수" 허위 표기 금지.**
6. 쿠팡 링크는 **Addon(A) 본문에만**, 어드민에서 사용자가 직접 URL 입력 → 자동 삽입.
7. 보험료 수치는 반드시 "{성별} {연령} 기준, 공시 기준일 YYYY-MM-DD" 병기.
8. 하루 최대 5개 발행. 동일 카테고리 연속 발행 금지.

---

## 3. 디렉토리 구조

```
insurancemoa/
├── CLAUDE.md              ← 본 파일 (항상 로드)
├── MEMORY.md              ← 사이트 상태 (항상 로드)
├── docs/
│   ├── INSURANCE_ETHICS.md  ← 항상 로드 (YMYL·보험업법·E-E-A-T)
│   ├── DATA_SCHEMA.md     ← 6+2 엔티티 스키마
│   ├── SEO_META.md        ← 메타·JSON-LD·내부링크 규칙
│   ├── COUPANG_RULES.md   ← Addon 전용 쿠팡 정책
│   └── WRITE_{TYPE}.md    ← 포스트 타입별 작성 규칙
├── templates/             ← 섹션 배열 스켈레톤
├── components/            ← React 컴포넌트
├── data/                  ← 엔티티별 메타데이터 (JS)
├── posts/                 ← 엔티티별 본문 (섹션 배열)
│   ├── products/   categories/   companies/
│   ├── guides/     situations/   compares/
│   ├── tools/      addons/
├── pages/                 ← Next.js 라우트
├── lib/                   ← supabase / jsonld
├── public/                ← favicon 세트, sitemap, rss, og
├── scripts/               ← sitemap·feeds·favicon 생성
└── supabase/migration.sql ← DB 스키마
```

---

## 4. 엔티티 & ID 체계

| Prefix | 엔티티 | 경로 | YMYL | 예 |
|---|---|---|---|---|
| `P####` | Product (보험상품) | `/products/{slug}/` | A | `P0001` 삼성 4세대 실손 |
| `K####` | Category (보험종류) | `/categories/{slug}/` | B | `K0001` silson |
| `C####` | Company (보험사) | `/companies/{slug}/` | B | `C0001` samsung-life |
| `H####` | Situation (상황허브) | `/situations/{slug}/` | B | `H0001` newlywed |
| `T####` | Tool (계산기) | `/tools/{slug}/` | B | `T0001` silson-premium |
| `M####` | Compare (비교) | `/compare/{slug}/` | A/B | `M0001` silson-2026 |
| `G####` | Guide (가이드) | `/guides/{slug}/` | B | `G0001` silson-claim-howto |
| `A####` | Addon (보조 생활) | `/addons/{slug}/` | C | `A0001` blackbox |

---

## 5. 섹션 타입

| type | 용도 |
|---|---|
| `intro` | 인트로 단락 (HTML) |
| `toc` | 자동 목차 |
| `h2` / `h3` | 소제목 |
| `body` | 본문 |
| `info` | 🔵 정보 박스 |
| `warning` | 🟡 주의·면책 박스 |
| `risk` / `emergency` | 🔴 리스크 박스 (원금 손실·갱신 급등 등) |
| `callout` | 일반 강조 |
| `sources` | 출처 |
| `faq` | FAQ (JSON-LD 자동) |
| `medDisclaimer` / `disclaimer` | 보험 면책 (필수 마지막) |
| `productSlot` | 쿠팡 자리 (Addon 한정) |
| `cta` | 쿠팡 CTA (어드민 매칭) |

**⚠️ `type: 'ad'`는 사용 금지.** 광고는 PostRenderer가 H2 인덱스로 자동 삽입.

---

## 6. 광고 정책 (PostRenderer 자동 삽입)

### 포스트 상세
- 상단 (날짜 ↔ 목차 사이) — `TopAdRow` (데스크톱 2개 / 모바일 1개)
- 첫 번째 H2 직전 — 광고 없음
- 두 번째 H2 직전 — `MultiplexAd` (autorelaxed)
- 세 번째 H2 이후 매 H2 직전 — `AdUnit` (auto)
- 좌우 사이드(1280px+) — `SideAd` 세로 sticky

### 리스트/홈/허브
- 상단 `TopAdRow` + 좌우 `SideAd`만

### 어드민·검색·searchAnalytics
- 광고 노출 없음

---

## 7. 작업 진입 프로토콜

**"{타입} N개 추가" 요청 시:**
1. `docs/WRITE_{TYPE}.md` 읽기
2. `templates/{type}-template.md` 읽기
3. `data/{entity}.js` 로드 (slug 충돌 체크)
4. 포스트 생성 → `posts/{entity}/{slug}.js` + `data/{entity}.js`에 메타 추가
5. Addon이면 `data/coupang-seed.json`에 제안 항목 추가
6. `node --check posts/{entity}/{slug}.js` 로 검증
7. `node scripts/generate-sitemap.js` `node scripts/generate-feeds.js`
8. `MEMORY.md` 진행 로그 업데이트

---

## 8. 공통 금지 사항

- 특정 보험사·설계사·대리점 추천
- 효능 단정 ("최고", "1등", "무조건")
- 원금보장·확정수익 표현
- 환급률 100% 이상 단정
- 출처 없는 보험료·재무 수치
- 실제로 수행하지 않은 전문가 감수 표기

---

## 9. 커밋 메시지

```
[타입]: 설명
```
타입: `content` (콘텐츠 추가), `fix`, `seo`, `rules`, `feat`, `refactor`, `data`, `ins` (보험 정보 업데이트)

---

## 10. 참고 파일 포인터 (필요 시 로드)

- `docs/INSURANCE_ETHICS.md` — YMYL, 면책, 보험업법, E-E-A-T
- `docs/DATA_SCHEMA.md` — 6+2 엔티티 스키마
- `docs/SEO_META.md` — title/description/JSON-LD/내부링크
- `docs/COUPANG_RULES.md` — Addon 전용 쿠팡 운영
- `docs/WRITE_{TYPE}.md` — 포스트 타입별 작성 규칙
- `templates/{type}-template.md` — 섹션 배열 스켈레톤
