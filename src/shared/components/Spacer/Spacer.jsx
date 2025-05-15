import { Link } from 'react-router-dom';
import styles from './Spacer.module.css';
import SectionTitle from '../SectionTitle/SectionTitle'

const Spacer = ({ to, title, text }) => {
    return (
        <div className={styles.headerWrapper}>
            <SectionTitle>{title}</SectionTitle>
            <div className={styles.spacer}></div>
            <Link to={to} className={styles.backBtn}>{text}</Link>
        </div>
    )
}

export default Spacer;