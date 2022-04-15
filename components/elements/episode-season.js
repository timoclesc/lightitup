import styles from './episode-season.module.css'

export default function EpisodeSeason({ season, episode }) {
  return (<span>
      <abbr className={styles.abbr} title="Episode">E</abbr>{String(episode).padStart(2, '0')}{' '}
      <abbr className={styles.abbr} title="Season">S</abbr>{String(season).padStart(2, '0')}
  </span>)
}
