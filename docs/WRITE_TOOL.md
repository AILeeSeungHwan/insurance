# WRITE_TOOL.md — 계산기 포스트 작성 규칙

YMYL Level B. 위젯 + 본문 1,500자 이상.

## 필수 섹션 순서
1. `intro` — 이 계산기의 쓰임새 + 한계 명시
2. `toc`
3. `h2` 사용법
4. `h2` 계산 원리
5. `h2` 결과 해석하기
6. `h2` 한계와 유의사항 (`warning` 박스)
7. `h2` 흔한 오해
8. `h2` 실제 활용 시나리오
9. `h2` FAQ
10. `sources`
11. `medDisclaimer`

## 메타 + 본문 별도
- 메타 `data/tools.js`: `{ calculator: 'silson-premium', ... }`
- 본문 `posts/tools/{slug}.js`: `{ id, calculator: 'silson-premium', sections: [...] }`
- 위젯 컴포넌트: `components/calculators/{Name}.js` + `components/calculators/index.js`의 MAP에 등록

## 톤
- "추정치"임을 반복 명시
- 공식 견적 대체 아님

## 금지
- "정확한 보험료" 표현
- 절대값 단정
