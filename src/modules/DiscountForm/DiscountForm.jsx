import { useDispatch, useSelector } from 'react-redux'
import { selectIsModalOpen } from '../../redux/modal/modal_selectors';
import { toggleModal } from '../../redux/modal/modalSlice';

import Section from "../../shared/components/Section/Section";
import PetsImage from '../../shared/Icons/websiteImg/pets.png';
import RegisterForm from "../RegisterForm/RegisterForm";
import ModalWindow from '../ModalWindow/ModalWindow';

import styles from './DiscountForm.module.css'


const DiscountForm = () => {
    const isModalOpen = useSelector(selectIsModalOpen);
    const dispatch = useDispatch();
    return (
        <>
            <Section>
                <div className={styles.discountContainer}>
                    <h2 className={styles.header}>5% off on the first order</h2>
                    <div className={styles.discountFormBox}>
                        <div className={styles.imageBox}>
                            <img className={styles.discountImage} src={PetsImage} alt="" />
                        </div>
                        <RegisterForm />
                    </div> 
                </div>
                <ModalWindow
                    isOpen={isModalOpen}
                    onClose={() => dispatch(toggleModal(false))}
                    title="Well done!"
                    firstParagraph="Your booking was successful."
                    secondParagraph="Please check your email for details."
                />

            </Section>
        </>
    )
}

export default DiscountForm;