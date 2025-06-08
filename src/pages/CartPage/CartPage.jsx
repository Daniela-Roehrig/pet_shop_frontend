import { useDispatch, useSelector } from 'react-redux'
import { selectIsModalOpen } from '../../redux/modal/modal_selectors';
import { toggleModal } from '../../redux/modal/modalSlice';

import Cart from "../../modules/Cart/Cart";
import Spacer from "../../shared/components/Spacer/Spacer";
import Section from "../../shared/components/Section/Section";
import ModalWindow from '../../modules/ModalWindow/ModalWindow';

const CartPage = () => {
    const isModalOpen = useSelector(selectIsModalOpen);
    const dispatch = useDispatch();
    return (
    <>
        <Spacer to="/products" text="Back to the store" title="Shopping Cart" />
        <Section>
            <Cart />
            <ModalWindow
                isOpen={isModalOpen}
                onClose={() => dispatch(toggleModal(false))}
                title="Congratulations!"
                firstParagraph="Your order has been successfully placed on the website."
                secondParagraph="A manager will contact you shortly to confirm your order."
            />
        </Section>
        </>
    )
}

export default CartPage;