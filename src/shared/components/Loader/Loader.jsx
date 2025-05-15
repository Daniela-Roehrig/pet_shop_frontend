import styles from './Loader.module.css'

const Loader = ({children})=> {
    return <div className={styles.loading}>{children}</div>
}

export default Loader;