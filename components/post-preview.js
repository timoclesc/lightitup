import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import { PrismicText } from '@prismicio/react'
import Date from '../components/date'
import EpisodeSeason from '../components/episode-season'

export default function PostPreview({
  title,
  date,
  excerpt,
  slug,
  number,
  season
}) {
  return (
    <div className="flex flex-col">
      <h3 className="text-3xl mb-3 font-bold tracking-tighter leading-tight">
        <Link href={`/posts/${slug}`}>
          <a className="transition-colors hover:underline hover:text-punchers-red">
            {title}
          </a>
        </Link>
      </h3>
      <div className="order-first">
        <EpisodeSeason episode={number} season={season}/>
      </div>
      <div className="text-lg mb-4">
        <Date dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  )
}
