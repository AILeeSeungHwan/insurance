# situation-template.md
```js
const post = {
  id: 'H####',
  sections: [
    { type: 'intro', html: '<p>2~3단락...</p>' },
    { type: 'toc' },
    { type: 'h2', id: 'def', text: '이 상황이란' },
    { type: 'body', html: '<p>...</p>' },
    { type: 'h2', id: 'priority', text: '보험 우선순위' },
    { type: 'body', html: '<ol>...</ol>' },
    { type: 'h2', id: 'budget', text: '예산 가이드 — 보험료 비중' },
    { type: 'body', html: '<p>...</p>' },
    { type: 'h2', id: 'scenario', text: '가상 시나리오 (허구 예시)' },
    { type: 'body', html: '<p>※ 허구 예시. 실제 인물·사례 아님.</p><p>...</p>' },
    { type: 'h2', id: 'tools', text: '관련 계산기 / 가이드' },
    { type: 'body', html: '<p>...</p>' },
    { type: 'h2', id: 'faq', text: 'FAQ' },
    { type: 'faq', items: [{ q: '...', a: '...' }]},
    { type: 'sources', items: [...] },
    { type: 'medDisclaimer' },
  ]
}
module.exports = post
```
