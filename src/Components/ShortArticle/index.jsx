import styles from './shortarticle.module.css'
import { getImageUrl } from '../../utils/function';

const ShortArticle = ({article,setstate}) => {  
    return (
        <div className={styles.southIndian}>
            <img src={getImageUrl(article.image)} />
            <h3 onClick={()=>setstate(article)}>{article.name} </h3>
        </div>        
    )
}

export default ShortArticle;