import { useState, useRef, useEffect } from 'react';
import TagDownIcon from '../../Icons/images/tagDown.svg';
import styles from './Select.module.css';

const Select = ({ name, value, onChange, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);

    const toggleOpen = () => setIsOpen(prev => !prev);

    useEffect(() => {
        const handleClick = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    return (
        <div ref={wrapperRef} className={`${styles.selectWrapper} ${isOpen ? styles.open : ''}`}>
            <select
                name={name}
                value={value}
                onChange={(e) => {
                    onChange(e);
                    toggleOpen();
                }}
                onClick={toggleOpen}
                className={styles.select}
            >
                {options.map(opt => (
                    <option onClick={toggleOpen} key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
            <span className={styles.icon}>
                <img src={TagDownIcon} alt="Dropdown Icon" />
            </span>

        </div>
    );
};

export default Select;
