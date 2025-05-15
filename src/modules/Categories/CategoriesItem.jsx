import { Link } from 'react-router-dom';
import backendInstance from '../../shared/api/backendInstance';
import styles from './Categories.module.css';

const baseURL = backendInstance.defaults.baseURL;

const CategoryItem = ({ id, title, image }) => (
    <li key={id}>
        <Link to={`/categories/${id}`} className={styles.categoryItem}>
            <img className={styles.categoryImg} src={`${baseURL}/${image}`} alt={title} />
            <h4>{title}</h4>
        </Link>
    </li>
);

export default CategoryItem;
