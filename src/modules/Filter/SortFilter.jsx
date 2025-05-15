import Select from '../../shared/components/Select/Select';
import { filterOptions } from './filterOptions';
import styles from './Filter.module.css';

const SortFilter = ({ value, onChange }) => (
    <div className={styles.filter}>
        <p className={styles.filterTitle}>Sorted</p>
        <Select name="sortBy" value={value} onChange={onChange} options={filterOptions} />
    </div>
);

export default SortFilter;
