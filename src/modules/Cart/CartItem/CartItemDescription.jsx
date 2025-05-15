import { Link } from "react-router-dom";
import Counter from "../../SingleProduct/Counter/Counter";
import styles from './CartItem.module.css';

const CartItemDescription = ({ id, title, count, price, discont_price, onIncrease, onDecrease }) => {
    const totalItemDiscontPrice = discont_price * count;
    const totalItemPrice = price * count;

    return (
        <div className={styles.cartDescription}>
            <Link to={`/products/${id}`}>
                <h4 className={styles.h4}>{title}</h4>
            </Link>

            <div className={styles.itemBox}>
                <Counter plus={() => onIncrease(id)} minus={() => onDecrease(id)} count={count} />

                <div className={styles.cartItemPrice}>
                    {discont_price ?
                        <>
                            <p className={styles.discont_price}>${totalItemDiscontPrice}</p>
                            <p className={styles.price} style={{ textDecoration: "line-through" }}>${totalItemPrice}</p>
                        </>
                        :
                        <p className={styles.discont_price}>${totalItemPrice}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default CartItemDescription;
