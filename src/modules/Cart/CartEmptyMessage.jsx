import Button from "../../shared/components/Button/Button";
import styles from './Cart.module.css';

const CartEmptyMessage = () => (
    <div className={styles.emptyBox}>
        <p>Looks like you have no items in your basket currently.</p>
        <Button text="Continue shopping" target="/products" status={true} width="30%" />
    </div>
);

export default CartEmptyMessage;
