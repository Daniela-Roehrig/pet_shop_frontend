import Cart from "../../modules/Cart/Cart";
import Spacer from "../../shared/components/Spacer/Spacer";
import Section from "../../shared/components/Section/Section";

const CartPage = () => {
    return (
        <Section>
            <Spacer to="/products" text="Back to the store" title="Shopping Cart" />
            <Cart />
        </Section>
    )
}

export default CartPage;