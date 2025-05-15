import styles from './Filter.module.css';

const PriceFilter = ({ min, max, onChange }) => (
    <div className={styles.filter}>
        <p className={styles.filterHeader}>Price</p>
        <input type="text" name="min" value={min} onChange={onChange} placeholder="from" />
        <input type="text" name="max" value={max} onChange={onChange} placeholder="to" />
    </div>
);

export default PriceFilter;
