# guide-template.md
```js
const post = {
  id: 'G####',
  sections: [
    { type: 'intro', html: '<p>...</p>' },
    { type: 'toc' },
    { type: 'h2', id: 'background', text: '배경 / 관련 제도' },
    { type: 'body', html: '<p>...</p>' },
    { type: 'h2', id: 'steps', text: '단계별 절차' },
    { type: 'body', html: '<ol><li><strong>1.</strong> ...</li></ol>' },
    { type: 'h2', id: 'check', text: '체크리스트' },
    { type: 'callout', html: '<ul><li>...</li></ul>' },
    { type: 'h2', id: 'mistakes', text: '자주 하는 실수' },
    { type: 'body', html: '<ul>...</ul>' },
    { type: 'h2', id: 'faq', text: 'FAQ' },
    { type: 'faq', items: [{ q: '...', a: '...' }]},
    { type: 'sources', items: [...] },
    { type: 'medDisclaimer' },
  ]
}
module.exports = post
```

## guideType === 'claim'일 때 (HowTo JSON-LD)
data/guides.js 메타에 `steps: [{ name, text }, ...]` 추가하면 자동 JSON-LD 발행.
