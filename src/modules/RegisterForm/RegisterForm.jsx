import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../redux/modal/modalSlice';
import RegisterFormFields from './RegisterFormFields';
import styles from './RegisterForm.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = () => {
    dispatch(toggleModal(true));
    reset();  
  };

  return (
    <form className={styles.registerForm} onSubmit={handleSubmit(onSubmit)}>
      <RegisterFormFields register={register} errors={errors} />
    </form>
  );
};

export default RegisterForm;
