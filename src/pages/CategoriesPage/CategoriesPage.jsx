import { getAllCategories } from "../../shared/api/categories";
import Categories from "../../modules/Categories/Categories";
import Section from "../../shared/components/Section/Section";
import Breadcrumbs from "../../shared/components/BreadCrumbs/BreadCrumbs";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";

const CategoriesPage = () => {
    return (
        <Section>
            <Breadcrumbs custom={[{ name: "Categories", to: "/categories" }]} />
            <SectionTitle>Categories</SectionTitle>
            <Categories fetchData={() => getAllCategories()} />
        </Section>
    )
}

export default CategoriesPage;