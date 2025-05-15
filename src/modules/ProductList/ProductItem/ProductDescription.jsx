import PriceInfo from "./PriceInfo/PriceInfo";
import styles from './ProductItem.module.css';

const ProductDescription = ({ title, price, discont_price }) => (
  <div className={styles.descriptionBox}>
    <p className={styles.description}>{title}</p>
    <PriceInfo price={price} discont_price={discont_price} />
  </div>
);

export default ProductDescription;
