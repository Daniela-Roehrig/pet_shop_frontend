import styles from './Section.module.css'

const Section = ({ children, title }) => (
    <section className={styles.section}>
        <div className={styles.container}>
            {title && <h2>{title}</h2>}
            {children}
        </div>
    </section> 
)

export default Section;