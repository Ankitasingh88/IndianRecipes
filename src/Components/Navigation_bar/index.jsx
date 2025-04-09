import { useState } from 'react'
import styles from './nav.module.css'
import Links from '../Links'
import { articles } from '../../data/data'
import Hamburger from 'hamburger-react'

const Navigation = ({clickedCategory,clickedarticle}) => {
    const uniqueCategories = [...new Set(articles.map(item => item.category))]
   
    const [isOpen, setIsOpen] = useState(false);
      
    const handleHome = () => {
        clickedCategory(null);
        clickedarticle(null);
        setIsOpen(!isOpen);
    }
    
    const handleClick = (item) => {
        clickedCategory(item);
        clickedarticle(null);
        setIsOpen(!isOpen);
    }
    
    return (
        <div className={styles.nav}>
            

            {isOpen && 
            <>
             <div className={styles.hamburger_links}>
            <Links title = "Home" onClick={handleHome} />
            {uniqueCategories.map((item, index) => (
            <Links key={index} title = {item} onClick={()=>handleClick(item)} />
            ))}
            </div>
            </>
            }

            <div className={styles.link_items}>
            <Links title = "Home" onClick={handleHome} />
            {uniqueCategories.map((item, index) => (
            <Links key={index} title = {item} onClick={()=>handleClick(item)} />
            ))}
            </div>

            <div className={styles.hamburger}>
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
            </div>
  
            </div>
    )
}

export default Navigation