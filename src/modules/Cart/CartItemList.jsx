import CartItem from "./CartItem/CartItem";
import styles from './Cart.module.css';

const CartItemList = ({ items }) => {
    const elements = items
        .filter(item => item.count > 0)
        .map((item) => <CartItem key={item.id} {...item} />);

    return (
        <ul className={styles.ordersList}>
            {elements}
        </ul>
    );
};

export default CartItemList;
