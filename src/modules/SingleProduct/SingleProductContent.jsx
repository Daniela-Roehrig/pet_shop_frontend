import PriceInfo from "../ProductList/ProductItem/PriceInfo/PriceInfo";
import Discounter from "../ProductList/ProductItem/Discounter/Discounter";
import Counter from "./Counter/Counter";
import Button from '../../shared/components/Button/Button';
import DescriptionBox from "./DescriptionBox/DescriptionBox";

import styles from './SingleProduct.module.css';

const SingleProductContent = ({
  title,
  price,
  discont_price,
  description,
  count,
  onPlus,
  onMinus,
  onAddToCart
}) => (
  <div className={styles.productName}>
    <h1>{title}</h1>

    <div className={styles.priceInfo}>
      <PriceInfo price={price} discont_price={discont_price} />
      {discont_price && (
        <Discounter
          price={price}
          discont_price={discont_price}
          position="static"
          height="80%"
        />
      )}
    </div>

    <div className={styles.productInfo}>
      <Counter plus={onPlus} minus={onMinus} count={count} />
      
      <Button
        status={true}
        position="relative"
        text="Add to cart"
        action={onAddToCart} 
      />
    </div>

    <DescriptionBox description={description} />
  </div>
);

export default SingleProductContent;
