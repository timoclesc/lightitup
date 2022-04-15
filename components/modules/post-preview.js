import Date from '@/elements/date'
import EpisodeSeason from '@/elements/episode-season'
import RichText from '@/modules/rich-text'
import IconLinks from '@/modules/icon-links'

export default function PostPreview({
  title,
  date,
  number,
  season,
  coverImage,
  content,
  spotify,
  apple
}) {
  return (
    <div className="flex flex-col bg-wild-blue-yonder p-8 mb-8 max-w-sm mx-auto">
      <h3 className="text-5xl mb-3 font-display font-bold leading-tight text-signal-beam">
        {title}
      </h3>
      <div className="text-signal-beam mb-2">
        <EpisodeSeason episode={number} season={season}/>
      </div>
      {coverImage && <img src={coverImage.url} alt={coverImage.alt} className="mb-4" />}

      <RichText content={content} />
      {
        (spotify || apple) && 
        <div className="flex justify-between items-center">
          <span>Listen now:</span>
          <IconLinks spotifyLink={spotify} appleLink={apple} />
        </div>
      }
    </div>
  )
}