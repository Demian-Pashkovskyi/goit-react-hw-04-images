import { useEffect } from 'react';
import PropTypes  from 'prop-types';
import { Overlay, ModalWindow } from './ModalStyled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, closeModal }) => {
  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const handleClick = evt => {
    if (evt.currentTarget === evt.target) {
      closeModal();
    }
  };


  return createPortal(
		<Overlay onClick={handleClick}>
			<ModalWindow>{children}</ModalWindow>
		</Overlay>,
		modalRoot
	);
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  closeModal: PropTypes.func.isRequired,
};