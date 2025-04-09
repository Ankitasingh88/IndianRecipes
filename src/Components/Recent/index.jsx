import styles from './recent.module.css'

const Recent = ({article,setstate}) => {  
    return (
        <>
        <div className={styles.recent}>
            <h3 onClick={()=>setstate(article)}>{article.name} </h3>
            <p className={styles.category}><span>Category:</span> {article.category}</p>
        </div>   
        </>       
    )
}

export default Recent;