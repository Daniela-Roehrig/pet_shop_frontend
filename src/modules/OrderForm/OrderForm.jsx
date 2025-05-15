import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import OrderInputGroup from "./OrderInputGroup";
import OrderStatus from "./OrderStatus";
import OrderButton from "../../shared/components/OrderButton/OrderButton";
import orderValidationRules from "./orderValidation";
import { defaultValues } from "./orderFields";
import { setOrder } from "../../shared/api/order";
import { clearCart } from "../../redux/cart/cartSlice";
import {
  selectCart,
  selectTotalCartItems,
  selectTotalCartPrice
} from "../../redux/cart/cart_selectors";

import styles from "./OrderForm.module.css";

const OrderForm = ({ onSuccess }) => {
  const items = useSelector(selectCart);
  const totalItems = useSelector(selectTotalCartItems);
  const totalPrice = useSelector(selectTotalCartPrice);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ defaultValues });

  const onSetOrder = async (newOrder) => {
    try {
      setLoading(true);
      setError(null);
      const fullOrder = { ...newOrder, items, totalItems, totalPrice };
      const data = await setOrder(fullOrder);

      if (!data) throw new Error("No data returned from server");

      dispatch(clearCart());
      return true;
    } catch (error) {
      setError(error.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (values) => {
    const result = await onSetOrder(values);
    if (result) {
      onSuccess();
      reset();
    }
  };

  return (
    <>
      <OrderStatus loading={loading} error={error} />
      {!loading && !error && (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.orderForm}>
          <OrderInputGroup
            register={register}
            errors={errors}
            validationRules={orderValidationRules}
          />
          <OrderButton />
        </form>
      )}
    </>
  );
};

export default OrderForm;
