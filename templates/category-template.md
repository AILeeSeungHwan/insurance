# category-template.md — 보험종류 포스트 스켈레톤

```js
const post = {
  id: 'K####',
  sections: [
    { type: 'intro', html: '<p>...2~3단락...</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'what', text: '이 보험이란' },
    { type: 'body', html: '<p>...</p>' },

    { type: 'h2', id: 'structure', text: '보장 구조' },
    { type: 'h3', id: 'main', text: '주계약' },
    { type: 'body', html: '<p>...</p>' },

    { type: 'h2', id: 'who', text: '가입 고려 대상 / 신중 고려 대상' },
    { type: 'body', html: '<ul><li>가입 고려: ...</li><li>신중 고려: ...</li></ul>' },

    { type: 'h2', id: 'choice', text: '선택 시 핵심 포인트' },
    { type: 'body', html: '<ol><li>...</li></ol>' },

    { type: 'h2', id: 'misunderstanding', text: '자주 오해하는 점' },
    { type: 'body', html: '<ul><li>...</li></ul>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '...', a: '...' },
    ]},

    { type: 'sources', items: [
      { label: '금감원 금융상품통합비교공시', url: 'https://finlife.fss.or.kr', org: '금융감독원', accessedAt: 'YYYY-MM-DD' },
    ]},

    { type: 'medDisclaimer' },
  ]
}
module.exports = post
```
