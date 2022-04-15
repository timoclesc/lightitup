import styles from './icon.module.css'
import classNames from 'classnames'

export default function Icon({ size, margins, children}) {
  var classes = classNames(size, margins, styles.icon, 'inline-block');
  return (
    <div className={classes}>
      {children}
    </div>
  )
}
