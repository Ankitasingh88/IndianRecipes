import { getImageUrl } from "../../utils/function"
import styles from './chosecategory.module.css'

const ChoseCategory = ({displayCategory,clickedarticle}) => {
    return (
       <>
        {displayCategory.map((item,index) =>
            <div className={styles.category}  key={index}>
            <h1 onClick={()=>clickedarticle(item)}>{item.name}</h1>
            <img src = {getImageUrl(item.image)} alt={item.image}></img>
            </div>
        )}
       </>
    )
}

export default ChoseCategory