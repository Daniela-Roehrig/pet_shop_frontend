import PriceFilter from './PriceFilter';
import DiscountFilter from './DiscountFilter';
import SortFilter from './SortFilter';

import styles from './Filter.module.css';

const Filter = ({ filters, updateFilters, showDiscount = true }) => {
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        updateFilters(name, type === "checkbox" ? checked : value);
    };

    return (
        <div className={styles.filtersBox}>
            <PriceFilter min={filters.min} max={filters.max} onChange={handleChange} />

            {showDiscount && (
                <DiscountFilter
                    checked={filters.discountOnly}
                    onChange={(e) => updateFilters('discountOnly', e.target.checked)}
                />
            )}

            <SortFilter value={filters.sortBy} onChange={handleChange} />
        </div>
    );
};

export default Filter;
