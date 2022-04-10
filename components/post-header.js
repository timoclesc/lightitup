import { RichText } from 'prismic-reactjs'
import Date from '../components/date'
import PostTitle from '../components/post-title'
import ContentContainer from '../components/content-container'
import EpisodeSeason from '../components/episode-season'

export default function PostHeader({ title, coverImage, date, author, episodenumber, seasonnumber }) {
  return (
    <>
      <ContentContainer>
        <div className="flex flex-col">
          <PostTitle tag="h1" className="mb-1">{title[0].text}</PostTitle>
          <p className="mb-0 text-l lg:text-2xl leading-tight order-first">
              <EpisodeSeason episode={episodenumber} season={seasonnumber} />
          </p>
          <div className="mb-4 text-lg">
            <Date dateString={date} />
          </div>
        </div>
      </ContentContainer>
    </>
  )
}
