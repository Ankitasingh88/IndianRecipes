import styles from './footer.module.css'
import Logo from '../Logo'
import SocialIcons from '../SocialIcons';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>

            <div className={styles.footerSection}>
            <Logo/>
            <h3>FOLLOW US</h3>
            <SocialIcons/>
            </div>
            
            <div className={styles.footerContact}>
                <h3 className={styles.footerContact}>Contact Us </h3>
                <p>Odenplan St-4</p>
                <p>Stockholm City,  Sweden</p>
                <p>(123) 764-532321</p>  
            </div>

            <div className={styles.footerTiming}>
                <h3 className={styles.footerTiming}>Business Hours</h3>
                <p>Monday - Friday: 9 AM - 10 PM</p>
                <p>Saturday - Sunday: 10 AM - 11 PM</p>
            </div>
            </div>

            <div className={styles.footerBottom}>
            <p>@2025 Indian Vegetarian Foods|Ankita</p>
            </div>
        </footer>     
    )
}

export default Footer;