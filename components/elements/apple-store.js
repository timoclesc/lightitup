import Image from 'next/image'
import AppleStoreIcon from './svg/apple-store.svg'

export default function Spotify({ url }) {
  return (
    <div className="flex items-center">
      <div className="w-12 h-12 relative mr-4">
        <a href={url} target="_blank" rel="noreferrer">
          <AppleStoreIcon />
        </a>
      </div>
    </div>
  )
}

