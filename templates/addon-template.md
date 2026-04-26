# addon-template.md
```js
const post = {
  id: 'A####',
  sections: [
    { type: 'intro', html: '<p>이 용품의 쓰임새 + 보험과의 관계 (Level C).</p>' },
    { type: 'toc' },
    { type: 'h2', id: 'why', text: '왜 필요한가' },
    { type: 'body', html: '<p>...</p>' },
    { type: 'h2', id: 'criteria', text: '선택 기준' },
    { type: 'body', html: '<ul><li>인증·AS</li></ul>' },
    { type: 'h2', id: 'link', text: '관련 보험 카테고리' },
    { type: 'body', html: '<p>...</p>' },
    { type: 'h2', id: 'shop', text: '쿠팡 파트너스 링크' },
    { type: 'productSlot', productKey: '블랙박스' }, // ← 어드민 DB와 매칭
    { type: 'h2', id: 'faq', text: 'FAQ' },
    { type: 'faq', items: [{ q: '...', a: '...' }]},
    { type: 'medDisclaimer' },
  ]
}
module.exports = post
```
