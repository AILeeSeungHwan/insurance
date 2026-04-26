# tool-template.md
```js
const post = {
  id: 'T####',
  calculator: 'silson-premium', // ← 이 키로 components/calculators/index.js MAP에서 위젯 매칭
  sections: [
    { type: 'intro', html: '<p>...추정치 명시...</p>' },
    { type: 'toc' },
    { type: 'h2', id: 'how', text: '이 계산기 사용법' },
    { type: 'body', html: '<p>...</p>' },
    { type: 'h2', id: 'logic', text: '계산 원리' },
    { type: 'body', html: '<p>...</p>' },
    { type: 'h2', id: 'interpret', text: '결과 해석하기' },
    { type: 'body', html: '<p>...</p>' },
    { type: 'h2', id: 'limits', text: '한계와 유의사항' },
    { type: 'warning', title: '추정치 — 절대값 아님', html: '<p>...</p>' },
    { type: 'h2', id: 'misuse', text: '흔한 오해' },
    { type: 'body', html: '<ul><li>...</li></ul>' },
    { type: 'h2', id: 'howto-use', text: '실제 활용 시나리오' },
    { type: 'body', html: '<p>...</p>' },
    { type: 'h2', id: 'faq', text: 'FAQ' },
    { type: 'faq', items: [{ q: '...', a: '...' }]},
    { type: 'sources', items: [...] },
    { type: 'medDisclaimer' },
  ]
}
module.exports = post
```
