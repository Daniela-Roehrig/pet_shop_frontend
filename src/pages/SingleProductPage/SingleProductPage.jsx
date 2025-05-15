import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Section from "../../shared/components/Section/Section";
import SingleProduct from "../../modules/SingleProduct/SingleProduct";
import Breadcrumbs from "../../shared/components/BreadCrumbs/BreadCrumbs";


import { getSingleProduct } from "../../shared/api/products";
import { getSingleCategory } from "../../shared/api/categories";
import Spinner from "../../shared/components/Spinner/Spinner";

const SingleProductPage = () => {
    const location = useLocation();
    const from = location.state?.from;

    const { productId, categoryId } = useParams();
    const [categoryTitle, setCategoryTitle] = useState('');

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await getSingleProduct(Number(productId));
                const dataChecked = Array.isArray(data.data) ? data.data[0] : data.data;

                setProduct(dataChecked);

                if (categoryId) {
                    const category = await getSingleCategory(categoryId);
                    setCategoryTitle(category.category?.title);
                }
            } catch (error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [categoryId, productId]);

    if (loading) {
        return (
            <div className="loading">
                <Spinner />
            </div>
        );
    }
    if (error || !product) {
        return (
            <Section>
                <p>No products are found.</p>
            </Section>
        );
    }

    const breadcrumbs = [];

    if (from === 'sales') {
        breadcrumbs.push({ name: "Sales", to: "/sales" });
    } else if (categoryId && categoryTitle) {
        breadcrumbs.push({ name: "Categories", to: "/categories" });
        breadcrumbs.push({ name: categoryTitle, to: `/categories/${categoryId}` });
    } else {
        breadcrumbs.push({ name: "All Products", to: "/products" });
    }

    breadcrumbs.push({ name: product.title });

    return (
        <Section>
            <Breadcrumbs custom={breadcrumbs} />
            <SingleProduct product={product} />
        </Section>
    );
};

export default SingleProductPage;
