import SpotifyIcon from '@/svg/spotify.svg'
import AppleStoreIcon from '@/svg/apple-store.svg'
import InstagramIcon from '@/svg/instagram.svg'
import FacebookIcon from '@/svg/facebook.svg'
import Icon from '@/elements/icon'

export default function IconLinks({ spotifyLink, appleLink, instagramLink, facebookLink }) {
  const iconSize = "w-8";
  const margins = "mr-4"
  const linkClasses = "flex items-center text-fun-blue hover:text-gunpowder transition-colors mb-2"
  return (
    <ul className="flex mt-4">
      {spotifyLink &&
        <a href={spotifyLink.url ?? spotifyLink} target="_blank" rel="noreferrer" className={linkClasses}>
          <Icon size={iconSize} margins={margins}>
            <SpotifyIcon />
          </Icon>
          <span className="sr-only">Listen on Spotify</span>
        </a>}
      {appleLink &&
        <a href={appleLink.url ?? appleLink} target="_blank" rel="noreferrer" className={linkClasses}>
          <Icon size={iconSize} margins={margins}>
            <AppleStoreIcon />
          </Icon>
          <span className="sr-only">Listen on App Store</span>
        </a>}
      {instagramLink &&
        <a href={instagramLink.url || instagramLink} target="_blank" rel="noreferrer" className={linkClasses}>
          <Icon size={iconSize} margins={margins}>
            <InstagramIcon />
          </Icon>
          <span className="sr-only">Follow on Instagram</span>
        </a>}
      {facebookLink &&
        <a href={facebookLink.url || facebookLink} target="_blank" rel="noreferrer" className={linkClasses}>
          <Icon size={iconSize} margins={margins}>
            <FacebookIcon />
          </Icon>
          <span className="sr-only">Follow on Instagram</span>
        </a>}
    </ul>
  )
}
