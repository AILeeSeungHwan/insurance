# product-template.md — 보험상품 포스트 스켈레톤 (Level A)

```js
const post = {
  id: 'P####',
  sections: [
    { type: 'intro', html: '<p><strong>{상품명}</strong> 한눈에 보기. ... 면책 한 줄.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'overview', text: '한눈에 보기' },
    { type: 'body', html: '<table>...주계약·공시일·갱신여부...</table>' },

    { type: 'h2', id: 'cover', text: '주계약 보장 내용' },
    { type: 'body', html: '<p>...</p>' },

    { type: 'h2', id: 'riders', text: '주요 특약' },
    { type: 'body', html: '<ul>...</ul>' },

    { type: 'h2', id: 'premium', text: '보험료 예시 ({성별} {연령}, {공시일} 기준)' },
    { type: 'body', html: '<p>...</p>' },

    { type: 'warning', title: '면책사항 · 주의', html: '<ul><li>...</li></ul>' },

    { type: 'h2', id: 'claim', text: '청구 절차 요약' },
    { type: 'body', html: '<p>자세한 절차는 <a href="/guides/silson-claim-howto/">실손 청구 가이드</a> 참조.</p>' },

    { type: 'h2', id: 'similar', text: '비슷한 상품 비교' },
    { type: 'body', html: '<p><a href="/compare/silson-2026/">비교 페이지</a></p>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [{ q: '...', a: '...' }]},

    { type: 'sources', items: [
      { label: '{보험사} 공시실', url: '...', org: '{보험사}', accessedAt: 'YYYY-MM-DD' },
      { label: '협회 공시실', url: '...', org: '...', accessedAt: 'YYYY-MM-DD' },
    ]},

    { type: 'medDisclaimer' },
  ]
}
module.exports = post
```
