import styles from './socialIcons.module.css'
import { SocialLogo } from 'social-logos';

const SocialIcons = () => {
    return(
        <div className={styles.social_icons} >
             <SocialLogo icon="facebook" size={ 28 } />
             <SocialLogo icon="instagram" size={ 28 } />
             <SocialLogo icon="twitter" size={ 28 } />
        </div>
    )
}

export default SocialIcons;