import CategoryItem from './CategoryItem';
import styles from './Categories.module.css';

const CategoryList = ({ categories }) => (
    <ul className={styles.list}>
        {categories.map(({ id, image, title }) => (
            <CategoryItem key={id} id={id} image={image} title={title}  />
        ))}
    </ul>
);

export default CategoryList;
