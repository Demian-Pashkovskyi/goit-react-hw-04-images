import { Box } from '../components/Styled/Box';
import { Component } from 'react';
import { GlobalStyle } from '../components/Styled/GlobalStyle';
import { getImages, PER_PAGE } from '../service/api';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { toast } from 'react-toastify';


export class App extends Component {
  state = {
    query: '',
    page: 1,
    imagesList: [],
    isLoading: false,
    currentImgPerPage: null,
    error: null,
    isModalOpen: false,
    modalImage: '',
  };

  componentDidUpdate(_, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
    if (prevQuery !== nextQuery) {
      this.getImagesData();
    }

    if (this.state.page > 2) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  handleFormSubmit = query => {
    this.setState(() => {
      return { query: query, page: 1, imagesList: [] };
    });
  };

  handleLoadMoreImg = () => {
    this.getImagesData();
  };

  getImagesData = async () => {
    try {
      this.setState({ isLoading: true });
      const { hits, totalHits } = await getImages(
        this.state.page,
        this.state.query
      );
      if (totalHits === 0) {
        toast.error('Images not found ...');
        this.setState({ isLoading: false, currentImgPerPage: null });
        return;
      }

      const imagesList = this.imagesArray(hits);

      this.setState(prevState => {
        return {
          imagesList: [...prevState.imagesList, ...imagesList],
          currentImgPerPage: hits.length,
          page: prevState.page + 1,
        };
      });
    } catch (error) {
      console.log(error);
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  imagesArray = data => {
    return data.map(({ id, largeImageURL, tags, webformatURL }) => {
      return { id, largeImageURL, tags, webformatURL };
    });
  };

  toggleModal = () => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
    }));
  };
  openModal = modalImage => {
    this.setState({ modalImage }, () => {
      this.toggleModal();
    });
  };
  render() {
    const { imagesList, isLoading, currentImgPerPage, error, isModalOpen, modalImage } =
      this.state;
    return (
			<>
			<GlobalStyle />
      <Box display="grid" gridTemplateColumns="1fr" gridGap="16px" pb="24px">
        <SearchBar onSubmit={this.handleFormSubmit} />

          {imagesList.length > 0 && !error && (
            <>
              <ImageGallery imagesList={imagesList} onClick={this.openModal} />
              {currentImgPerPage && currentImgPerPage < PER_PAGE && (
                <p>No more pictures</p>
              )}
            </>
          )}

          {isModalOpen && (
            <Modal onClose={this.toggleModal}>
              <img src={modalImage} alt="" />
            </Modal>
          )}

          {currentImgPerPage === PER_PAGE && !isLoading && (
            <Button onClick={this.handleLoadMoreImg} />
          )}
          {isLoading && <Loader />}
      </Box>
			</>
    );
  }
}