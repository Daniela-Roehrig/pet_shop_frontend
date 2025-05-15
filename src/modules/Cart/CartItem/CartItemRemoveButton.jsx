import styles from './CartItem.module.css';
import BlackCross from '../../../shared/Icons/images/blackCross.png';

const CartItemRemoveButton = ({ onRemove }) => (
    <button className={styles.cartItemBtn} onClick={onRemove}>
        <img src={BlackCross} alt="Remove Item" />
    </button>
);

export default CartItemRemoveButton;
