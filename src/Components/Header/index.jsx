import { useState } from 'react'
import styles from './header.module.css';
import Logo from '../Logo';

const Header = () => {
    const [pageTitle, setPageTitle] = useState("Vegetarian Indian Food")
    const [subTitle, setSubTitle] = useState("-STOCKHOLM SINCE 2025-")

    return (
        <header className={styles.header}> 
          <h1 className={styles.pageTitle}>{pageTitle}</h1>
          <h2 className={styles.subTitle}>{subTitle}</h2>
          <Logo/>
        </header>   
    )
}

export default Header