import { useDispatch, useSelector } from 'react-redux'
import { selectIsModalOpen } from '../../redux/modal/modal_selectors';
import { toggleModal } from '../../redux/modal/modalSlice';

import Navigation from '../../Navigation'
import Header from '../../modules/Header/Header'
import Footer from '../../modules/Footer/Footer'
import ModalWindow from '../ModalWindow/ModalWindow'

function App() {
  const isModalOpen = useSelector(selectIsModalOpen);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <Navigation />
      <Footer />

      <ModalWindow isOpen={isModalOpen} onClose={() => dispatch(toggleModal(false))} />
    </>
  )
}

export default App;