import { Box } from '../components/Styled/Box';
import { Component } from 'react';
import { GlobalStyle } from '../components/Styled/GlobalStyle';
import { getImages } from '../service/api';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    search: '',
    imagesList: [],
    page: 1,
    error: null,
    isLoading: false,
    isModalOpen: false,
    modalImage: '',
  };

  async componentDidUpdate(_, prevState) {
    try {
      const { search, page } = this.state;

      if (prevState.search !== search) {
        this.setState({
          imagesList: await getImages(search),
        });
        this.setState({ isLoading: false });
      }

      if (prevState.page !== page) {
        const extendedImagesList = await getImages(search, page);

        this.setState(prevState => {
          return {
            imagesList: [...prevState.imagesList, ...extendedImagesList],
          };
        });
        this.setState({ isLoading: false });
      }
    } catch (error) {
      this.setState({ error });
    }
  }

  onSubmit = search => {
    this.setState({ isLoading: true, search });
  };

  loadMoreImages = () => {
    this.setState(prevState => {
      return {
        isLoading: true,
        page: prevState.page + 1,
      };
    });
  };

  openModal = imgId => {
    this.setState({
      isModalOpen: true,
      modalImage: this.state.imagesList.find(image => image.id === imgId)
        .largeImageURL,
    });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const {
      imagesList,
      search,
      error,
      isLoading,
      isModalOpen,
      modalImage,
    } = this.state;

    return (
      <>
        <GlobalStyle />
        <Box display="grid" gridTemplateColumns="1fr" gridGap="16px" pb="24px">
          <SearchBar onSubmit={this.onSubmit} />
          {isLoading && <Loader />}
          {error && <p>Whoops, something went wrong: {error.message}</p>}
          {!!imagesList.length && (
            <>
              <ImageGallery
                imagesList={imagesList}
                search={search}
                openModal={this.openModal}
              />
              <Box display="flex" justifyContent="center">
                <Button loadMoreImages={this.loadMoreImages} />
              </Box>
            </>
          )}
        </Box>
        {isModalOpen && (
          <Modal closeModal={this.closeModal}>
            <img src={modalImage} alt={search} />
          </Modal>
        )}
      </>
    );
  }
}