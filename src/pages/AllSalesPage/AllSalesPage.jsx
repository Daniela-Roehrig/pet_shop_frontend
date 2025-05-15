import useFetch from '../../shared/hooks/useFetch';
import { getAllProducts } from '../../shared/api/products';
import Section from '../../shared/components/Section/Section';
import Breadcrumbs from '../../shared/components/BreadCrumbs/BreadCrumbs';
import SectionTitle from '../../shared/components/SectionTitle/SectionTitle';
import ProductList from '../../modules/ProductList/ProductList';


const AllSalesPage = () => {
    const { data, loading, error } = useFetch({
        requestFunction: getAllProducts,
        initialData: [],
    });

    const discountedProducts = data.filter(product => product.discont_price);

    return (
        <Section>
            <Breadcrumbs custom={[{ name: "All sales", to: "/sales" }]} />
            <SectionTitle> Discounted products</SectionTitle>
            <ProductList data={discountedProducts} from="sales" loading={loading} error={error} pathBuilder={(id) => `/sales/${id}`} showDiscount={false} />
        </Section>
    );
};

export default AllSalesPage;