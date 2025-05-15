import Checkbox from '../../shared/components/Checkbox/Checkbox';
import styles from './Filter.module.css';

const DiscountFilter = ({ checked, onChange }) => (
    <div className={styles.filter}>
        <p className={styles.filterTitle}>Discounted items</p>
        <Checkbox checked={checked} onChange={onChange} />
    </div>
);

export default DiscountFilter;
