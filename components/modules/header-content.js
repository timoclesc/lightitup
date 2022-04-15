import { SITE_DESC, SITE_TITLE, PODCAST_URLS } from "lib/constants"
import IconLinks from "@/modules/icon-links"

export default function HeaderContent({isHome, tag, description}) {
  const titleStyles = 'text-6xl lg:text-7xl font-display font-bold tracking-wide leading-none text-fun-blue'
  const authorStyles = 'text-3xl lg:text-4xl mt-2 font-display font-bold text-signal-beam'
  const descStyles = 'text-lg mt-5 text-gunpowder'

  const {spotify, instagram, facebook} = PODCAST_URLS;
  return (
    <section className="p-8 pb-0 max-w-sm flex flex-col grow h-full ">
      {isHome ? (
        <h1 className={titleStyles}>
          {SITE_TITLE}
        </h1>
      ) : (
        <p className={titleStyles}>
          {SITE_TITLE}
        </p>
      )}
      <p className={authorStyles}>
        {tag}
      </p>
      <p className={descStyles}>
        {description}
      </p>
      <div className="mt-auto">
        <IconLinks spotifyLink={spotify} instagramLink={instagram} facebookLink={facebook} />
      </div>
    </section>
  )
}
