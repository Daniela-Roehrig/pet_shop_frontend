import styles from './SectionTitle.module.css'

const SectionTitle = ({children})=> {
    return <div className={styles.title}>{children}</div>
}

export default SectionTitle;