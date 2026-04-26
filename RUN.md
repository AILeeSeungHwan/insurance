# RUN.md — 보험모아 로컬 실행 & 배포 가이드

## 1. 최초 셋업

```bash
cd /Users/lee/Desktop/Project/insurance/insurance

# 의존성 설치
npm install

# (선택) favicon·OG 이미지 생성에 필요한 dev 의존성
npm i -D sharp to-ico
npm run generate-favicons   # public/brand-logo.svg → 11종 PNG/ICO

# sitemap·feeds 생성
npm run generate-sitemap
npm run generate-feeds

# 환경변수 작성
cp .env.local.example .env.local
# .env.local 에 Supabase / AdSense / GA / Clarity / Coupang ID 입력
```

## 2. 개발 서버

```bash
npm run dev
# http://localhost:3000
```

## 3. 빌드

```bash
npm run build   # prebuild 훅으로 sitemap·feeds 자동 재생성
npm start
```

## 4. Supabase 마이그레이션

`supabase/migration.sql` 을 Supabase SQL Editor에서 실행. `coupang_links`, `pageviews` 두 테이블 + RLS 정책이 설정됩니다.

## 5. 검색엔진 등록 체크리스트

- [ ] Google Search Console — `sitemap.xml` 제출
- [ ] Naver Search Advisor — Yeti 메타 확인 후 등록
- [ ] Daum 검색등록 — favicon.ico 루트 배치 확인
- [ ] Bing Webmaster Tools — IndexNow 키 등록
- [ ] `public/ads.txt` — 실제 AdSense pub-XXXXX 입력

## 6. AdSense 심사 전 체크리스트

- [ ] `/about/` `/editorial-policy/` `/disclaimer/` `/privacy/` `/terms/` `/contact/` 모두 노출 가능
- [ ] 면책 문구가 모든 본문 페이지 하단에 자동 노출 (PostRenderer)
- [ ] 보험계약 체결·모집 유도 표현 0건 (`grep -r "원금보장\|확정수익\|반드시 가입" posts/`)
- [ ] 출처 2개 이상이 모든 포스트에 존재
- [ ] favicon / og 이미지 / sitemap / robots.txt 정상 노출

## 7. 발행 워크플로

```
data/{entity}.js + posts/{entity}/{slug}.js 추가
   ↓
node --check posts/{entity}/{slug}.js
   ↓
npm run prebuild   # sitemap·feeds 재생성
   ↓
git commit
   ↓
git push (Vercel 자동 빌드)
   ↓
GSC / Naver / IndexNow 알림
```

## 8. 자주 쓰는 검증 명령

```bash
# 단정 표현 검색
grep -rE "원금보장|확정수익|무조건|최고의 보험" posts/

# 면책 누락 점검
grep -L "medDisclaimer\|disclaimer" posts/products/

# JS 구문 검사
for f in posts/**/*.js; do node --check "$f" || echo "FAIL: $f"; done
```
