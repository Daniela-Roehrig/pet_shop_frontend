import { useSelector } from "react-redux";
import { selectCart, selectTotalCartPrice, selectTotalCartItems } from "../../redux/cart/cart_selectors";

import Section from "../../shared/components/Section/Section";
import CartEmptyMessage from "./CartEmptyMessage";
import CartItemList from "./CartItemList";
import CartSummary from "./CartSummary";
import Breadcrumbs from "../../shared/components/BreadCrumbs/BreadCrumbs";

import styles from './Cart.module.css';

const Cart = () => {
    const items = useSelector(selectCart);
    const totalPrice = useSelector(selectTotalCartPrice);
    const totalItems = useSelector(selectTotalCartItems);

    const hasItems = items.length > 0 && items.some(item => item.count > 0);

    return (
        <Section>
            {hasItems ? (
                <div className={styles.cartBox}>
                    <CartItemList items={items} />
                    <CartSummary totalItems={totalItems} totalPrice={totalPrice} />
                </div>
            ) : (
                <CartEmptyMessage />
            )}
        </Section>
    );
};

export default Cart;
