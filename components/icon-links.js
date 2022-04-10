import SpotifyIcon from './svg/spotify.svg'
import AppleStoreIcon from './svg/apple-store.svg'
import InstagramIcon from './svg/instagram.svg'
import Icon from './icon'

export default function IconLinks({ spotifyLink, appleLink, instagramLink }) {
  const iconSize = "w-12";
  const margins = "mr-4"
  const linkClasses = "flex items-center hover:text-punchers-red transition-colors mb-2"
  return (
    <div className="flex flex-col">
      {spotifyLink &&
        <a href={spotifyLink.url} target="_blank" rel="noreferrer" className={linkClasses}>
          <Icon size={iconSize} margins={margins}>
            <SpotifyIcon />
          </Icon>
          Listen on Spotify
        </a>}
      {appleLink &&
        <a href={appleLink.url} target="_blank" rel="noreferrer" className={linkClasses}>
          <Icon size={iconSize} margins={margins}>
            <AppleStoreIcon />
          </Icon>
          Listen on App Store
        </a>}
      {instagramLink &&
        <a href={instagramLink.url} target="_blank" rel="noreferrer" className={linkClasses}>
          <Icon size={iconSize} margins={margins}>
            <InstagramIcon />
          </Icon>
          Follow on Instagram
        </a>}
    </div>
  )
}
