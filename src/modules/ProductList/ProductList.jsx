import { useProductsFilters } from '../../shared/hooks/useProductsFilters';

import Filter from '../Filter/Filter';
import ProductItem from './ProductItem/ProductItem';
import Section from '../../shared/components/Section/Section';
import Spinner from '../../shared/components/Spinner/Spinner';

import styles from './ProductList.module.css';
import Loader from '../../shared/components/Loader/Loader';

const ProductList = ({ pathBuilder, data, error, loading, showDiscount, from }) => {
    const { filters, updateFilters } = useProductsFilters();

    const applyFilters = (products) => {
        const min = Number(filters.min) || 0;
        const max = Number(filters.max) || Infinity;

        return products
            .filter(({ price, discont_price }) => {
                const finalPrice = discont_price ?? price;
                return finalPrice >= min && finalPrice <= max;
            })
            .filter(({ discont_price }) => {
                return filters.discountOnly ? !!discont_price : true;
            });
    };

    const sortProducts = (products) => {
        return [...products].sort((a, b) => {
            const priceA = a.discont_price ?? a.price;
            const priceB = b.discont_price ?? b.price;

            switch (filters.sortBy) {
                case 'newest':
                    return b.updatedAt - a.updatedAt;
                case 'high-low':
                    return priceB - priceA;
                case 'low-high':
                    return priceA - priceB;
                default:
                    return 0;
            }
        });
    };

    const filteredProducts = sortProducts(applyFilters(data));

    if (loading) {
        return (  
            <Loader> <Spinner /> </Loader>

        );
    }

    if (error) {
        return (
            <Section> <p>Something went wrong!</p> </Section>
        );
    }

    if (!filteredProducts.length) {
        return (
            <Section>
                <Filter
                    filters={filters}
                    updateFilters={updateFilters}
                    showDiscount={showDiscount}
                />
                <p>No such products</p>
            </Section>
        );
    }

    return (
        <Section>
            <Filter
                filters={filters}
                updateFilters={updateFilters}
                showDiscount={showDiscount}
            />
            <ul className={styles.productsList}>
                {filteredProducts.map(product => (
                    <li key={product.id}>
                        <ProductItem
                            {...product}
                            pathBuilder={pathBuilder}
                            from={from}
                        />
                    </li>
                ))}
            </ul>
        </Section>
    );
};

export default ProductList;
