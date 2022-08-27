import React, { Component } from 'react';
// import { Box } from './Styled/Box';
import { Modal } from './Modal/Modal';
// import { FeedbackOptions } from './Feedback/FeedbackOptions';
// import { Section } from './Section/Section';
// import { Notification } from './Notification/Notification';

// import { Box } from 'components/Box';
// import { Component } from 'react';
// import { GlobalStyle } from './GlobalStyle';
// import { getImages } from 'services/api';
// import { Searchbar } from './Searchbar/Searchbar';
// import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Button } from './Button/Button';
// import { Loader } from './Loader/Loader';
// import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    loading: false,
    currentImgPerPage: null,
    error: null,
    showModal: false,
    largeImage: '',
  };

	toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
		const {
      showModal,
    } = this.state;
    
    return (
      <>
			<button type='button' onClick={this.toggleModal}> Открить модалку </button>
			{showModal && (
            <Modal onClose={this.toggleModal} >
              <h1>Привет це модальне вікно Бекдропа</h1>
							<button type='button' onClick={this.toggleModal}> Закрити модалку </button>
            </Modal>
          )}
			</>
    );
  }
}