import { useEffect } from 'react';
import styles from './ModalWindow.module.css';
import ModalWindowContent from './ModalWindowContent';
import Section from '../../shared/components/Section/Section';

const ModalWindow = ({ isOpen, onClose, title, firstParagraph, secondParagraph }) => {
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
        <Section>
        <div className={styles.modalBG} onClick={onClose}>
            <div onClick={(e) => e.stopPropagation()}>
                <ModalWindowContent
                    onClose={onClose}
                    title={title}
                    firstParagraph={firstParagraph}
                    secondParagraph={secondParagraph}
                />
            </div>
        </div>
        </Section>
    );
};

export default ModalWindow;

