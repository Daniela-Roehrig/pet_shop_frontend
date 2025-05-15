import Input from '../../shared/components/Input/Input';
import DiscountBtn from '../../shared/components/DiscountBtn/DiscountBtn';
import styles from './RegisterForm.module.css';

const RegisterFormFields = ({ register, errors }) => (
  <>
    <Input
      {...register("name")}
      name="name"
      type="text"
      placeholder="Name"
      variant="default"
    />
    {errors.name && <p className={styles.discontFormError}>{errors.name.message}</p>}

    <Input
      {...register("phone")}
      name="phone"
      type="text"
      placeholder="Phone Number"
      variant="default"
    />
    {errors.phone && <p className={styles.discontFormError}>{errors.phone.message}</p>}

    <Input
      {...register("email")}
      name="email"
      type="email"
      placeholder="Email"
      variant="default"
    />
    {errors.email && <p className={styles.discontFormError}>{errors.email.message}</p>}

    <DiscountBtn className={styles.registerBtn}>Get a discount</DiscountBtn>
  </>
);

export default RegisterFormFields;
