import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

import CartLogo from '../../../shared/Icons/headerImg/cart.svg';
import { selectTotalCartItems } from '../../../redux/cart/cart_selectors'

import styles from './HeaderCart.module.css';

const HeaderCart = () => {
    const totalItems = useSelector(selectTotalCartItems);

    return (
        <div className={styles.wrapper}>
            <NavLink to='/cart'>
                <img className={styles.cart} src={CartLogo} alt="Cart Logo" />
                {totalItems > 0 && (
                    <span className={styles.badge}>{totalItems}</span>
                )}
            </NavLink>
        </div>
    ); 
};

export default HeaderCart;
