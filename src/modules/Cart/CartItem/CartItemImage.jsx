import { Link } from "react-router-dom";
import styles from './CartItem.module.css';

const CartItemImage = ({ id, image, title, baseURL }) => (
    <Link to={`/products/${id}`}>
        <img className={styles.cartItemImage} src={`${baseURL}/${image}`} alt={title} />
    </Link>
);

export default CartItemImage;
