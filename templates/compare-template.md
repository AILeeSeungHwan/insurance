# compare-template.md
```js
const post = {
  id: 'M####',
  sections: [
    { type: 'intro', html: '<p>비교 목적 + 면책. 공시 기준일 명시.</p>' },
    { type: 'toc' },
    { type: 'h2', id: 'criteria', text: '비교 기준' },
    { type: 'body', html: '<ul>...동일 조건 가정...</ul>' },
    { type: 'h2', id: 'matrix', text: '비교 매트릭스' },
    { type: 'body', html: '<table>...</table>' },
    { type: 'h2', id: 'item-A', text: '항목 A' },
    { type: 'body', html: '<p>...</p>' },
    { type: 'h2', id: 'target', text: '타겟별 추천(참고)' },
    { type: 'body', html: '<ul>...</ul>' },
    { type: 'warning', title: '보험료만 보지 말 것', html: '<p>민원·청구 처리·재무건전성 함께</p>' },
    { type: 'h2', id: 'faq', text: 'FAQ' },
    { type: 'faq', items: [{ q: '...', a: '...' }]},
    { type: 'sources', items: [...] },
    { type: 'medDisclaimer' },
  ]
}
module.exports = post
```
