import WhiteCross from '../../shared/Icons/images/whiteCross.png';
import styles from './ModalWindow.module.css';

const ModalWindowContent = ({ onClose }) => {
    return (
        <div className={styles.modalWin} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeWin} onClick={onClose} aria-label="Close Modal">
                <img src={WhiteCross} alt="Close" />
            </button>
            <div className={styles.congratulation}>
                <h2
                    style={{
                        color: 'white',
                        fontSize: '40px',
                        fontWeight: '600',
                    }}
                >
                    Congratulations!
                </h2>
                <p style={{ paddingTop: '20px' }}>
                    Your order has been successfully placed on the website.
                </p>
                <p style={{ paddingTop: '20px' }}>
                    A manager will contact you shortly to confirm your order.
                </p>
            </div>
        </div>
    );
};

export default ModalWindowContent;
