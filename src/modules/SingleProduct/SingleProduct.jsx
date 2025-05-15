import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { selectCart } from "../../redux/cart/cart_selectors";
import { addToCart, increaseCountInCart } from "../../redux/cart/cartSlice";
import backendInstance from "../../shared/api/backendInstance";

import Section from "../../shared/components/Section/Section";
import SingleProductView from "./SingleProductView";

const SingleProduct = ({ product }) => {
  if (!product) return null;

  const { id, title, image, price, discont_price, description } = product;
  const cartItems = useSelector(selectCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [count, setCount] = useState(1);

  const onPlus = () => setCount((prev) => prev + 1);
  const onMinus = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));
  const onImageClick = () => navigate("/products");

  const handleAddToCart = () => {
    const existing = cartItems.find((item) => item.id === id);
    if (existing) {
      dispatch(increaseCountInCart({ id, count }));
    } else {
      dispatch(addToCart({ ...product, count }));
    }
    navigate("/cart");
  };

  const baseURL = backendInstance.defaults.baseURL;
  const imageUrl = image ? `${baseURL}/${image}` : "/fallback.png";

  return (
    <Section>
      <SingleProductView
        title={title}
        imageUrl={imageUrl}
        price={price}
        discont_price={discont_price}
        description={description}
        count={count}
        onPlus={onPlus}
        onMinus={onMinus}
        onAddToCart={handleAddToCart}
        onImageClick={onImageClick}
      />
    </Section>
  );
};

export default SingleProduct;
