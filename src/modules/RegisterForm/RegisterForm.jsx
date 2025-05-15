import { useForm } from "react-hook-form";
import registerValidationRules from './registerValidation';

import RegisterFormFields from './RegisterFormFields';
import styles from './RegisterForm.module.css';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
    }
  });

  const onSubmit = (data) => {
    console.log("Register form submitted:", data);
    reset();
  };

  return (
    <form className={styles.registerForm} onSubmit={handleSubmit(onSubmit)}>
      <RegisterFormFields
        register={(name) => register(name, registerValidationRules[name])}
        errors={errors}
      />
    </form>
  );
};

export default RegisterForm;
