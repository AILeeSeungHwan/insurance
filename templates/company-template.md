# company-template.md
```js
const post = {
  id: 'C####',
  sections: [
    { type: 'intro', html: '<p>{회사명} 개요...</p>' },
    { type: 'toc' },
    { type: 'h2', id: 'overview', text: '한눈에 보기' },
    { type: 'body', html: '<ul>...</ul>' },
    { type: 'h2', id: 'history', text: '회사 개요' },
    { type: 'body', html: '<p>...</p>' },
    { type: 'h2', id: 'soundness', text: '재무건전성 (공시 기반)' },
    { type: 'info', title: '재무 지표 기준', html: '<p>K-ICS·자본·민원지표 출처 명시</p>' },
    { type: 'h2', id: 'products', text: '주요 상품 카테고리' },
    { type: 'body', html: '<p>...</p>' },
    { type: 'h2', id: 'claim', text: '청구 채널 / 고객센터' },
    { type: 'body', html: '<p>...</p>' },
    { type: 'h2', id: 'faq', text: 'FAQ' },
    { type: 'faq', items: [{ q: '...', a: '...' }]},
    { type: 'sources', items: [...] },
    { type: 'medDisclaimer' },
  ]
}
module.exports = post
```
