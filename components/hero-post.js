import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import Date from '../components/date'
import EpisodeSeason from '../components/episode-season'
import IconLinks from '../components/icon-links'

export default function HeroPost({
  title,
  date,
  excerpt,
  seasonnumber,
  episodenumber,
  applelink,
  spotifylink,
  slug,
}) {
  return (
    <section className="mt-8 md:mt-20">
      <div className="two-col-container">
        <div>
          <h2 className="mb-8 text-4xl md:text-5xl font-bold leading-tight font-display tracking-wide">
            Latest Episode
          </h2>
        </div>
        <div className="flex flex-col">
          <Link href={`/posts/${slug}`}>
            <a className="mb-4 text-2xl lg:text-4xl transition-colors hover:underline hover:text-punchers-red font-bold tracking-tighter leading-tight">
              {title.map( el => el.text)}
            </a>
          </Link>
          <p className="mb-0 text-l lg:text-2xl leading-tight order-first">
            <EpisodeSeason episode={episodenumber} season={seasonnumber} />
          </p>
          <div className="mb-8 text-lg">
            <Date dateString={date} />
          </div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <IconLinks appleLink={applelink} spotifyLink={spotifylink} />
        </div>
      </div>
    </section>
  )
}
