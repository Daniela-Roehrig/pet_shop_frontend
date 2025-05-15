import { useEffect } from 'react';
import styles from './ModalWindow.module.css';
import ModalWindowContent from './ModalWindowContent';

const ModalWindow = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className={styles.modalBG} onClick={onClose}>
            <ModalWindowContent onClose={onClose} />
        </div>
    );
};

export default ModalWindow;
