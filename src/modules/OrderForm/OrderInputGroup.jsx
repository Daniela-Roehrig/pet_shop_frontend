import Input from "../../shared/components/Input/Input";
import { useId } from "react";

import styles from "./OrderForm.module.css";

const OrderInputGroup = ({ register, errors, validationRules }) => {
  const nameId = useId();
  const phoneId = useId();
  const emailId = useId();

  return (
    <>
      <Input
        {...register('name', validationRules.name)}
        name="name"
        type="text"
        id={nameId}
        placeholder="Name"
        variant="order"
      />
      {errors.name && <p className={styles.orderFormError}>{errors.name.message}</p>}

      <Input
        {...register('phone', validationRules.phone)}
        name="phone"
        type="tel"
        id={phoneId}
        placeholder="Phone number"
        variant="order"
      />
      {errors.phone && <p className={styles.orderFormError}>{errors.phone.message}</p>}

      <Input
        {...register('email', validationRules.email)}
        name="email"
        type="email"
        id={emailId}
        placeholder="Email"
        variant="order"
      />
      {errors.email && <p className={styles.orderFormError}>{errors.email.message}</p>}
    </>
  );
};

export default OrderInputGroup;
