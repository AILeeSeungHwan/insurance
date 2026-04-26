import Layout from '../../components/Layout'
import PostRenderer from '../../components/PostRenderer'
import PageTracker from '../../components/PageTracker'
import guides from '../../data/guides'
import categories from '../../data/categories'
import tools from '../../data/tools'

export async function getStaticPaths() {
  return { paths: guides.map(p => ({ params: { slug: p.slug } })), fallback: false }
}

export async function getStaticProps({ params }) {
  const meta = guides.find(p => p.slug === params.slug)
  if (!meta) return { notFound: true }

  let postData = null
  try { postData = require(`../../posts/guides/${meta.slug}.js`) } catch (_) { postData = null }
  if (postData && postData.default) postData = postData.default

  const related = [
    ...(meta.relatedCategorySlug ? [categories.find(c => c.slug === meta.relatedCategorySlug)].filter(Boolean).map(c => ({ ...c, url:`/categories/${c.slug}/` })) : []),
    ...(meta.relatedToolSlugs || []).map(s => tools.find(x => x.slug === s)).filter(Boolean).map(x => ({ ...x, url:`/tools/${x.slug}/` })),
  ].slice(0, 6)

  return { props: { meta, postData, related } }
}

export default function GuideDetail({ meta, postData, related }) {
  return (
    <Layout title={meta.title} description={meta.description} topAd={false}>
      <PageTracker slug={meta.slug} title={meta.title} />
      <PostRenderer meta={meta} postData={postData} related={related} />
    </Layout>
  )
}
