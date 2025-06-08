import Input from '../../shared/components/Input/Input';
import DiscountBtn from '../../shared/components/DiscountBtn/DiscountBtn';
import styles from './RegisterForm.module.css';
import registerValidationRules from './registerValidation';


const RegisterFormFields = ({ register, errors }) => (
  <>
    <Input 
      {...register("name", registerValidationRules.name)}
      name="name"
      type="text"
      placeholder="Name"
      variant="default"
    />
    {errors.name && <p className={styles.discontFormError}>{errors.name.message}</p>}

    <Input
      {...register("phone", registerValidationRules.phone)}
      name="phone"
      type="text"
      placeholder="Phone Number"
      variant="default"
    />
    {errors.phone && <p className={styles.discontFormError}>{errors.phone.message}</p>}

    <Input
      {...register("email", registerValidationRules.email)}
      name="email"
      type="email"
      placeholder="Email"
      variant="default"
    />
    {errors.email && <p className={styles.discontFormError}>{errors.email.message}</p>}

    <DiscountBtn className={styles.registerBtn} type="submit">Get a discount</DiscountBtn>
  </>
);

export default RegisterFormFields;
