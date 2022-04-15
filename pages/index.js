import Container from '@/layout/container'
import MoreStories from '@/layout/more-stories'
import Layout from '@/layout/layout'
import Intro from '@/modules/intro'
import { getAllEpisodesForHome } from '../lib/api'


export default function Index({ preview, allPosts, allAuthors, homepage }) {

  return (
      <Layout preview={preview} homepage={homepage}>
        <Intro content={homepage.intro} />
        <Container>
          {allPosts.length > 0 && <MoreStories posts={allPosts} />}
        </Container>
      </Layout>
  )
}

export async function getStaticProps({ preview = false, previewData }) {
  const data = await getAllEpisodesForHome(previewData)

  const allPosts = data.allEpisodes.edges
  const allAuthors = data.allAuthors.edges
  const homepage = data.allHomepages.edges[0].node
  return {
    props: { preview, allPosts, allAuthors, homepage }
  }
}
