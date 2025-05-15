import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { deleteFromCart, increaseCount, decreaseCountinCart } from "../../../redux/cart/cartSlice";

import backendInstance from "../../../shared/api/backendInstance";
import styles from './CartItem.module.css';

import CartItemImage from "./CartItemImage";
import CartItemDescription from "./CartItemDescription";
import CartItemRemoveButton from "./CartItemRemoveButton";

const CartItem = ({ ...item }) => {
    const { id, image, title, price, discont_price, count } = item;
    const dispatch = useDispatch();

    const onDeleteFromCart = useCallback((id) => {
        dispatch(deleteFromCart(id));
    }, [dispatch]);

    const onIncreaseCart = useCallback((id) => {
        dispatch(increaseCount({ id }));
    }, [dispatch]);

    const onDecreaseCart = useCallback((id) => {
        dispatch(decreaseCountinCart(id));
    }, [dispatch]);

    const baseURL = backendInstance.defaults.baseURL;

    return (
        <li className={styles.cartItem} key={id}>
            <CartItemImage id={id} image={image} title={title} baseURL={baseURL} />

            <CartItemDescription
                id={id}
                title={title}
                count={count}
                price={price}
                discont_price={discont_price}
                onIncrease={onIncreaseCart}
                onDecrease={onDecreaseCart}
            />

            <div style={{ width: "30px" }}></div>

            <CartItemRemoveButton onRemove={() => onDeleteFromCart(id)} />
        </li>
    );
};

export default CartItem;
