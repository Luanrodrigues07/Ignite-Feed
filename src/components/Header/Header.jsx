import styles from'./Header.module.css'

import IgniteLogo from '../images/Ignite-logo.svg'

function Header() {
    return(
        <header className={styles.header}>
            <img src={IgniteLogo}></img>
        </header>
    )
}


export default Header;