/* import styles from './Input.module.css';

const Input = ({
  style,
  value,
  required,
  type,
  placeholder,
  name,
  onChange,
  children,
  variant = 'default', 
}) => {
  const inputClass =
    variant === 'order' ? styles.orderInput : styles.input; 

  return (
    <>
      <input
        style={style}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={inputClass}
      />
      {children}
    </>
  );
};

export default Input;
 */

// Input.js
import styles from './Input.module.css';

const Input = ({
  name,
  type,
  placeholder,
  required,
  id,
  variant = 'default',
  ...rest
}) => {
  const inputClass =
    variant === 'order' ? styles.orderInput : styles.input;

  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      className={`${inputClass} ${rest.className || ''}`.trim()}
      {...rest}
    />
  );
};

export default Input;
