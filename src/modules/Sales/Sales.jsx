import { getAllProducts } from '../../shared/api/products';
import useFetch from '../../shared/hooks/useFetch';
import Spinner from '../../shared/components/Spinner/Spinner';
import ProductItem from '../ProductList/ProductItem/ProductItem';
import Section from '../../shared/components/Section/Section';
import Loader from '../../shared/components/Loader/Loader';

import styles from './Sales.module.css';


const Sales = ({ limit }) => {
    const { data, loading, error } = useFetch({
        requestFunction: getAllProducts,
        initialData: [],
    });

    const discountedProducts = data
        .filter(product => product.discont_price)
        .slice(0, limit);

    return (
        <>
            {loading || error ? (
                <Loader>
                    {loading && <Spinner />}
                    {error && <p>Error: {error}</p>}
                </Loader>
            ) : (
                <Section>
                    <ul className={styles.list}>
                        {discountedProducts.map(product => (
                            <li key={product.id}>
                                <ProductItem {...product} pathBuilder={(id) => `/sales/${id}`} />
                            </li>
                        ))}
                    </ul>
                </Section>
            )}
        </>
    );
};

export default Sales;
