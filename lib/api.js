import Prismic from 'prismic-javascript'

const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME
const REF_API_URL = `https://${REPOSITORY}.cdn.prismic.io/api/v2`
const GRAPHQL_API_URL = `https://${REPOSITORY}.cdn.prismic.io/graphql`
// export const API_URL = 'https://your-repo-name.cdn.prismic.io/api/v2'
export const API_TOKEN = process.env.PRISMIC_API_TOKEN
export const API_LOCALE = process.env.PRISMIC_REPOSITORY_LOCALE

export const PrismicClient = Prismic.client(REF_API_URL, {
  accessToken: API_TOKEN,
})

async function fetchAPI(query, { previewData, variables } = {}) {
  const prismicAPI = await PrismicClient.getApi()
  const res = await fetch(
    `${GRAPHQL_API_URL}?query=${query}&variables=${JSON.stringify(variables)}`,
    {
      headers: {
        'Prismic-Ref': previewData?.ref || prismicAPI.masterRef.ref,
        'Content-Type': 'application/json',
        'Accept-Language': API_LOCALE,
        Authorization: `Token ${API_TOKEN}`,
      },
    }
  )

  if (res.status !== 200) {
    console.log(await res.text())
    throw new Error('Failed to fetch API')
  }

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getAllEpisodesWithSlug() {
  const data = await fetchAPI(`
    {
      allEpisodes {
        edges {
          node {
            _meta {
              uid
            }
          }
        }
      }
    }
  `)
  return data?.allEpisodes?.edges
}

export async function getAllAuthors(previewData) {
  const data = await fetchAPI(`
    {
      allAuthors {
        edges {
          node {
            name
            picture
            _meta {
              id
            }
          }
        }
      }
    }
  `, 
  { previewData }
  )
  return data?.allEpisodes?.edges
}

export async function getAuthorById(id, previewData) {
  const data = await fetchAPI(`
    {
      allAuthors(id: $id, lang: $lang) {
        edges {
          node {
            name
            picture
            _meta {
              id
            }
          }
        }
      }
    }
  `,
  { previewData,
    variables: {
      slug,
      lang: API_LOCALE,
    }
  })
  return data?.allEpisodes?.edges
}


export async function getAllEpisodesForHome(previewData) {
  const data = await fetchAPI(
    `
    query {
      allEpisodes(sortBy: date_DESC) {
        edges {
          node {
            title
            content
            date
            season
            number
            coverimage
            apple {
              ... on _ExternalLink{
                url
              }
            }
            spotify {
              ... on _ExternalLink{
                url
              }
            }
            _meta {
              id
            }
          }
        }
      },
      allAuthors {
        edges {
          node {
            name
            picture
            _meta {
              id
            }
          }
        }
      },
      allHomepages {
        edges {
          node {
            tag
            description
            intro
            socials {
              facebook {
                ... on _ExternalLink{
                  url
                }
              }
              instagram {
                ... on _ExternalLink{
                  url
                }
              }
              spotify {
                ... on _ExternalLink{
                  url
                }
              }
              anchor {
                ... on _ExternalLink{
                  url
                }
              }
              apple {
                ... on _ExternalLink{
                  url
                }
              }
            }
            _meta {
              id
            }
          }
        }
      }
    }
  `,
    { previewData }
  )

  return data
}

export async function getPostAndMorePosts(slug, previewData) {
  const data = await fetchAPI(
    `
  query PostBySlug($slug: String!, $lang: String!) {
    post(uid: $slug, lang: $lang) {
      title
      content
      date
      season
      number
      coverimage
      apple {
        ... on _ExternalLink{
          url
        }
      }
      spotify {
        ... on _ExternalLink{
          url
        }
      }
      _meta {
        uid
      }
    }

   morePosts: allEpisodes(sortBy: date_DESC, first: 3) {
      edges {
        node {
          title
          content
          date
          season
          number
          coverimage {
            url
          }
          apple {
            ... on _ExternalLink{
              url
            }
          }
          spotify {
            ... on _ExternalLink{
              url
            }
          }
          _meta {
            uid
          }
        }
      }
    }
  }
  `,
    {
      previewData,
      variables: {
        slug,
        lang: API_LOCALE,
      },
    }
  )

  data.morePosts = data.morePosts.edges
    .filter(({ node }) => node._meta.uid !== slug)
    .slice(0, 2)

  return data
}
