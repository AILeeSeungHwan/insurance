# 다음 세션 작업 (2026-04-27 이후)

세션 시작 시 이 파일 + CLAUDE.md + MEMORY.md 읽고 진행.

## 1. 남은 28개 포스트 실전 데이터 재작성

- `posts/companies/*.js` 10개 — 1,500~2,500자
- `posts/tools/*.js` 10개 — 1,500~2,500자 (위젯+원리+해석+한계)
- `posts/addons/*.js` 8개 — 1,500~1,800자 (Level C)

규칙: products / compares / guides / situations 6~8개 패턴과 동일 깊이. 단정 표현 금지, 면책 자동, 출처 2개+, FAQ 8개, 공시 기준일 명시.

## 2. ⚠️ 자동화 규칙 — sitemap·RSS·feeds 동기화

**문제**: 포스트 1개라도 추가/수정/삭제 시 sitemap·RSS·atom이 갱신 안 되면 색인 누락.

**규칙 (CLAUDE.md / Project/CLAUDE.md / ~/.claude/CLAUDE.md 모두 반영)**:

- 어떤 포스트라도 `data/*.js` 또는 `posts/*/*.js` 변경 후 **반드시** 실행:
  ```bash
  npm run prebuild  # = generate-sitemap + generate-feeds
  ```
- 커밋 직전 `public/sitemap*.xml` `public/rss.xml` `public/atom.xml`이 staged 인지 확인
- 수동 발행·자동 발행(launchd/스크립트) 모두 동일 적용
- `prebuild` 훅이 `npm run build`에 자동 포함되어 있으니 Vercel 빌드는 안전. 다만 dev 환경·수동 검증·로컬 sitemap 확인 시는 명시적 실행

**자동화 포스팅 워크플로 명문화**:
```
data/{entity}.js + posts/{entity}/{slug}.js 추가/수정
  → node --check posts/{entity}/{slug}.js
  → npm run prebuild           ← 필수
  → git add data/ posts/ public/sitemap*.xml public/rss.xml public/atom.xml
  → git commit
  → git push
```

## 3. 작업 순서

1. 위 자동화 규칙을 `~/.claude/CLAUDE.md` §3, `/Users/lee/Desktop/Project/CLAUDE.md` §5, 그리고 이 프로젝트 `CLAUDE.md` §7에 추가 (3중 반영)
2. `MEMORY.md` 진행 로그 업데이트
3. 회사 10 → 도구 10 → Addon 8 순으로 작성
4. 각 단계마다 `npm run prebuild` 실행 후 커밋/푸시
5. 모두 완료 후 1회 `npm run build` 통과 확인

## 4. 현재 진행 상황 (2026-04-27 기준)

- products 8 ✅
- compares 6 ✅
- guides 6 ✅
- situations 6 ✅
- categories 8 (1차 작성 — silson/car는 4,500자, 나머지 6개는 1,500~2,000자. 필요시 보강)
- companies / tools / addons = **남은 28개**

마지막 커밋: `98750c2` (situations 6개)
