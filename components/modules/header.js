import Logo from '@/elements/logo'
import HeaderContent from '@/modules/header-content'
import styles from './header.module.css'

function Header({authors, tag, description}) {
    return (
        <header className={`bg-just-right p-10 h-screen md:fixed inset-0 right-1/2 ${styles.header}`}>
            <div className="flex flex-col  items-center h-full">
                <Logo url={'/'} />
                <HeaderContent isHome={true} tag={tag} description={description} />
            </div>
        </header>
    )
}

export default Header;