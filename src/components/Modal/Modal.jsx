import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import propTypes from 'prop-types';
import { Overlay, ModalWindow } from './ModalStyled';


const modalRoot = document.querySelector('#modal-root');
export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

	render() {
    return createPortal (
      <Overlay onClick={this.handleOverlayClick}>
        <ModalWindow >{this.props.children}</ModalWindow>
      </Overlay>, 
			modalRoot,
    );
  }
}

Modal.propTypes = {
  children: propTypes.node.isRequired,
}