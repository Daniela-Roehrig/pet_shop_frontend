import useFetch from '../../shared/hooks/useFetch';
import { getAllProducts } from '../../shared/api/products';
import Section from '../../shared/components/Section/Section';
import Breadcrumbs from '../../shared/components/BreadCrumbs/BreadCrumbs';
import SectionTitle from '../../shared/components/SectionTitle/SectionTitle';
import ProductList from '../../modules/ProductList/ProductList';


const AllProductsPage = () => {
    const { data, loading, error } = useFetch({
        requestFunction: getAllProducts,
        initialData: [],
    });

    return (

        <Section>
            <Breadcrumbs custom={[{ name: "All Products", to: "/products" }]} />
            <SectionTitle>All Products</SectionTitle>
            <ProductList
                pathBuilder={(id) => `/products/${id}`}
                error={error}
                loading={loading}
                data={data}
            />
        </Section>

    );
};

export default AllProductsPage;
