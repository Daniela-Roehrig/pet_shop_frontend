import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { getSingleCategory } from "../../shared/api/categories";
import Loader from "../../shared/components/Loader/Loader";
import ProductList from "../../modules/ProductList/ProductList";
import Section from "../../shared/components/Section/Section";
import Spinner from "../../shared/components/Spinner/Spinner";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import Breadcrumbs from "../../shared/components/BreadCrumbs/BreadCrumbs";

const ProductsByCategoryPage = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [categoryTitle, setCategoryTitle] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await getSingleCategory(Number(categoryId));
                const items = Array.isArray(data.data) ? data.data : data.data.products;
                setProducts(items);
                setCategoryTitle(data.category.title);
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        };
        fetchData();
    }, [categoryId]);

    if (loading) {
        return (
            <Loader>
                <Spinner />
            </Loader>
        );
    }
    if (error) {
        return (
            <Section>
                <p>Error</p>
            </Section>
        );
    }

    return (
        <Section>
            <Breadcrumbs
                custom={[
                    { name: "Categories", to: "/categories" },
                    { name: categoryTitle, to: `/categories/${categoryId}` }
                ]}
            />
            <SectionTitle>{categoryTitle}</SectionTitle>
            <ProductList data={products} loading={loading} error={error} pathBuilder={(id) => `/categories/${categoryId}/products/${id}`} />
        </Section>
    );
};

export default ProductsByCategoryPage;
