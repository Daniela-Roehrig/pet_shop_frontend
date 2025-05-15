import Categories from '../../modules/Categories/Categories';
import Sales from '../../modules/Sales/Sales';
import Button from '../../shared/components/Button/Button';
import DiscountForm from '../../modules/DiscountForm/DiscountForm';
import Spacer from '../../shared/components/Spacer/Spacer';
import { useProductsFilters } from '../../shared/hooks/useProductsFilters'; // Pfad anpassen falls nötig

import { getLimitedCategories } from '../../shared/api/categories';

import styles from './MainPage.module.css'

const MainPage = () => {
    const limit = 4;
const { filters } = useProductsFilters()
    return (
        <main>
            <section className={styles.amazingSection}>
                <h1 className={styles.amazingH}>Amazing Discounts on Pets Products!</h1>
                <Button text="Check out" status="true" width="fit-content" minWidth="25vw" target="/sales" />
            </section>
            <Spacer to="/categories" text="All Categories" title="Categories" />
            <Categories fetchData={() => getLimitedCategories(limit, filters.sortBy)} />
            <DiscountForm />
            <Spacer to="/sales" text="All Sales" title="Sale" />
            <Sales limit={limit} />
        </main>
    )
}

export default MainPage;