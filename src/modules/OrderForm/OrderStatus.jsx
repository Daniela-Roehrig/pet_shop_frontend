import Spinner from "../../shared/components/Spinner/Spinner";
import styles from "./OrderForm.module.css";

const OrderStatus = ({ loading, error }) => {
  if (!loading && !error) return null;

  return (
    <>
      {loading && <Spinner />}
      {error && <p className={styles.error}>Something went wrong: {error}</p>}
    </>
  );
};

export default OrderStatus;

