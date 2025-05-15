import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart } from "../../../redux/cart/cartSlice";
import ProductImage from "./ProductImage";
import ProductDescription from "./ProductDescription";


import styles from './ProductItem.module.css';

const ProductItem = ({ pathBuilder, from, ...product }) => {
  const { id, title, price, discont_price } = product;
  const [hovered, setHovered] = useState(false);

  const dispatch = useDispatch();
  const onAdd = useCallback(
    (product) => dispatch(addToCart(product)),
    [dispatch]
  );

  return (
    <div
      key={id}
      className={styles.productItem}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={pathBuilder(id)} state={from ? { from } : undefined}>
        <ProductImage
          product={product}
          onAdd={onAdd}
          hovered={hovered}
        />
        <ProductDescription
          title={title}
          price={price}
          discont_price={discont_price}
        />
      </Link>
    </div>
  );
};

export default ProductItem;
