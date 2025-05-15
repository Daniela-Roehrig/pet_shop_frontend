import styles from './DiscountBtn.module.css';

const ButtonDiscount = ({ isSuccess }) => {
    return (
        <button
            className={styles.discountBtn}
            type="submit">
            Get a discount
        </button>
    )
}

export default ButtonDiscount;