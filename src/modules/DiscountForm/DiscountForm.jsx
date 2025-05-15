import Section from "../../shared/components/Section/Section";
import PetsImage from '../../shared/Icons/websiteImg/pets.png';
import RegisterForm from "../RegisterForm/RegisterForm";

import styles from './DiscountForm.module.css'


const DiscountForm = () => {

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
            </Section>
        </>
    )
}

export default DiscountForm;