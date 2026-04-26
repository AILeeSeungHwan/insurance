# MEMORY.md — insurancemoa 사이트 상태

> 세션 간 공유 상태. 포스팅 작업 완료 시 반드시 업데이트. 150줄 이하 유지.

---

## 현재 상태 (2026-04-25)

- **오픈 여부**: 배포 전 (로컬 스캐폴드 완료)
- **도메인**: insurancemoa.ambitstock.com (가비아 → Vercel 연결 예정)
- **Supabase**: 마이그레이션 SQL 준비 완료. 실제 연결은 `.env.local` 작성 후
- **AdSense 심사**: 미신청. `RUN.md` 체크리스트 참조
- **마지막 작업**: 초기 스캐폴드 + 샘플 콘텐츠 60개 + 어드민·검색·법적 페이지 + §A 패치 적용

---

## 포스트 카운트

| 엔티티 | 목표 | 현재 | 비고 |
|---|---|---|---|
| 보험상품 (products) | 15+ | 8 | 4세대 실손 2 / 자동차 2 / 암 1 / 운전자 1 / 치아 1 / 여행자 1 |
| 보험종류 (categories) | 15 | 8 | silson/car/cancer/driver/dental/travel/pension/pet |
| 보험사 (companies) | 10 | 10 | 생명 5 + 손해 5 |
| 가이드 (guides) | 6+ | 6 | 청구·사고처리·세제·갱신비교·환급·분쟁 |
| 상황허브 (situations) | 6+ | 6 | 신혼·출산·자영업·프리랜서·시니어·첫차 |
| 계산기 (tools) | 10+ | 10 | silson/car/cancer/driver/tax/pension/surrender/inflation/pet/copayment |
| 비교 (compares) | 6+ | 6 | 실손·자동차·암·치아·운전자·실손vs정액 |
| 보조생활 (addons) | 8+ | 8 | 블랙박스/카시트/낙상방지/여행/펫/혈압계 등 |

총 62개 포스트.

---

## 앵커 포스트 (사이트 전체 링크 집중)

- `/compare/silson-2026/` ✅ — 실손 비교
- `/compare/car-direct-2026/` ✅ — 자동차 다이렉트
- `/categories/cancer/` ✅ — 암보험
- `/tools/silson-premium/` ✅ — 실손 보험료 추정
- `/guides/silson-claim-howto/` ✅ — 실손 청구
- `/situations/newlywed/` ✅ — 신혼

---

## 쿠팡 연동

- 시드 데이터 9개 (`data/coupang-seed.json`) — 어드민에서 "📦 시드 불러오기"로 DB 이관
- 모든 시드는 `coupang_url: null` — 사용자가 직접 어드민에서 URL 입력
- **포스트 본문에 하드코딩된 쿠팡 링크 없음** (보험상품 본문 전체 금지 원칙 준수)
- 자동 삽입은 **Addon(A) 카테고리에 한정**

---

## 주요 컴포넌트 / 페이지

- `components/InsuranceBoxes.js` — InfoBox / WarningBox / RiskBox / InsuranceDisclaimer / SourceList / YmylBadge
- `components/PostRenderer.js` — section array + H2 인덱스 광고 자동 + 쿠팡 자동 + JSON-LD (Article / Breadcrumb / FinancialProduct / FinancialService / WebApplication / HowTo / FAQ)
- `components/calculators/` — 10종 위젯 (실손·자동차·암·운전자·세액공제·연금·환급·인플레·펫·자기부담)
- `pages/admin/index.js` — 트래픽 + 쿠팡 CRUD + 포스트 slug 참조
- `pages/searchAnalytics.js` — car.ambitstock 구조 이식, 검색유입 분석
- 법적 페이지 6종 (about, editorial-policy, disclaimer, privacy, terms, contact) — 보험 특화

---

## §A 패치 상태 (2026-04-25 일괄 적용)

- ✅ `_document.js` — favicon 11종 선언 (Daum 대응 .ico 우선) + RSS/Atom alternate + Naver/Bing 메타
- ✅ `Layout.js` — OG/Twitter Card 풀세트 + Yeti/NaverBot 메타
- ✅ `public/site.webmanifest` `browserconfig.xml` `safari-pinned-tab.svg` `og-default.svg` `brand-logo.svg`
- ✅ `scripts/generate-sitemap.js` — 분할 sitemap (10종) + 인덱스 + news sitemap
- ✅ `scripts/generate-feeds.js` — RSS 2.0 / Atom 1.0
- ✅ `scripts/generate-favicons.js` — sharp + to-ico 의존(install 필요), brand-logo.svg → 11종 PNG/ICO
- ⚠️ favicon PNG/ICO 11개 — `npm i -D sharp to-ico && npm run generate-favicons` 실행 필요
- ⚠️ `og-default.png` (1200×630) — 동일 스크립트로 SVG → PNG 변환 또는 외부 도구

---

## 진행 로그

- **2026-04-25 (1차)**: health 프로젝트 복제 → 보험 도메인 치환. 6+2 엔티티 모델, 페이지 8세트(허브+상세), 컴포넌트 InsuranceBoxes, 계산기 10종 위젯, 샘플 포스트 62개. §A 패치(favicon/OG/sitemap-split/RSS/Atom/Naver·Daum 메타) 일괄 반영. 보험업법 준수 면책 문구 자동 삽입.

---

## 다음 세션 진입 시 체크

1. 이 파일 + `CLAUDE.md` + `docs/INSURANCE_ETHICS.md` 읽기
2. 사용자 요청 타입에 해당하는 `docs/WRITE_*.md` 로드
3. 기존 slug 충돌 방지를 위해 `data/{entity}.js` 먼저 확인
4. 작업 후 `MEMORY.md` "포스트 카운트" + "진행 로그" 업데이트
5. 새 Addon 포스트 시 `data/coupang-seed.json` 제안 추가
6. sitemap·feeds 재생성: `npm run prebuild`
7. 보험료 수치는 반드시 "{성별} {연령}, 공시 기준일 YYYY-MM-DD" 병기
