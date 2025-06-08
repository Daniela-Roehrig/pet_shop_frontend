import Button from "../../../shared/components/Button/Button";
import SaleItemLabel from "./Discounter/Discounter";
import backendInstance from "../../../shared/api/backendInstance";
import styles from './ProductItem.module.css';

const ProductImage = ({ product, onAdd, hovered }) => {
  const { image, price, discont_price } = product;
  const baseURL = backendInstance.defaults.baseURL;

  const handleAddClick = () => {
    onAdd(product);
    return true; 
  };

  return (
    <div
      className={styles.productImgBox}
      style={{
        backgroundImage: `url(${baseURL}/${image})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        position: 'relative',
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
        action={handleAddClick}
        status={hovered}
        text="Add to cart"
        position="absolute"
        left="16px"
        right="16px"
        bottom="16px"
        width="auto"
      />
    </div>
  );
};

export default ProductImage;
