import styles from './SingleProduct.module.css';
import SingleProductContent from "./SingleProductContent";

const SingleProductView = ({
  title,
  imageUrl,
  price,
  discont_price,
  description,
  count,
  onPlus,
  onMinus,
  onAddToCart,
  onImageClick
}) => (
  <div className={styles.productBox}>
    <div
      className={styles.mainImageBox}
      onClick={onImageClick}
      style={{ cursor: "pointer" }}
    >
      <img src={imageUrl} alt={title || "picture"} />
    </div>

    <SingleProductContent
      title={title}
      price={price}
      discont_price={discont_price}
      description={description}
      count={count}
      onPlus={onPlus}
      onMinus={onMinus}
      onAddToCart={onAddToCart}
    />
  </div>
);

export default SingleProductView;
