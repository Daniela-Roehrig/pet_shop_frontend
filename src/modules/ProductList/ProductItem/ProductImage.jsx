import Button from "../../../shared/components/Button/Button";
import SaleItemLabel from "./Discounter/Discounter";
import backendInstance from "../../../shared/api/backendInstance";
import styles from './ProductItem.module.css';

const ProductImage = ({ product, onAdd, hovered }) => {
  const { image, price, discont_price } = product;
  const baseURL = backendInstance.defaults.baseURL;

  return (
    <div
      className={styles.productImgBox}
      style={{
        backgroundImage: `url(${baseURL}/${image})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
      }}
    >
      {discont_price && (
        <SaleItemLabel
          position="absolute"
          top="16px"
          right="16px"
          price={price}
          discont_price={discont_price}
        />
      )}
      <Button
        action={() => onAdd(product)}
        status={hovered}
        text="Add to cart"
        position="absolute"
        left="16px"
        right="16px"
        bottom="16px"
      />
    </div>
  );
};

export default ProductImage;
