import styles from './featured.module.css'
import Recent from '../Recent'
import Main_article from '../Main_article'
import { featuredArticle,southIndianArticle,RecentArticle, articles } from '../../data/data'
import ShortArticle from '../ShortArticle'

const Featured = ({clickedarticle}) => {
    return(
        <div className={styles.featured}>
            <div className={styles.left}>
            <h4>RECENT ADDED MENU</h4>
            {RecentArticle.map((item,index)=> <Recent key= {index} article={item} setstate={clickedarticle}/>)}
            </div>
            
            <div className={styles.center}>
            <h4>OUR FOOD ITEMS</h4>
            <Main_article article={featuredArticle} setstate={clickedarticle}/>
            </div>
       
            <div className={styles.right}>
            <h4>SOUTH INDIAN DISHES</h4>
            {southIndianArticle.map((item,index)=> <ShortArticle key= {index} article={item} setstate={clickedarticle}/>)}
            </div>
        </div>
    )
}

export default Featured