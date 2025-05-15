import { useDispatch } from "react-redux";
import { toggleModal } from "../../redux/modal/modalSlice";
import OrderForm from "../OrderForm/OrderForm";
import styles from './Cart.module.css';

const CartSummary = ({ totalItems, totalPrice }) => {
    const dispatch = useDispatch();

    return (
        <div className={styles.orderInfo}>
            <h3 className={styles.h3}>Order details</h3>
            <p className={styles.totalItems}>{totalItems} items</p>

            <div className={styles.totalPrice}>
                <p className={styles.totalItems}>Total</p>
                <p className={styles.totalBold}>${totalPrice.toFixed(2)}</p>
            </div>

            <OrderForm onSuccess={() => dispatch(toggleModal(true))} />
        </div>
    );
};

export default CartSummary;
