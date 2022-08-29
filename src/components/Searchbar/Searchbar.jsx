// import { Formik } from 'formik';
// import PropTypes from 'prop-types';
// import {
//   SearchBar,
//   SearchForm,
//   SearchFormButton,
//   SearchFormButtonLabel,
//   SearchFormInput,
// } from './SearchbarStyled';

// export const Searchbar = ({ onSubmit }) => (
//   <SearchBar>
//     <Formik
//       initialValues={{ search: '' }}
//       onSubmit= {async values => await onSubmit(values.search)}
//     >
//       {({ isSubmitting }) =>  (
//         <SearchForm>
//           <SearchFormButton type="submit" disabled = {isSubmitting}>
//             <SearchFormButtonLabel>Search</SearchFormButtonLabel>
//           </SearchFormButton>

//           <SearchFormInput
//             type="text"
//             name="search"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//           />
//         </SearchForm>
//       )}
//     </Formik>
//   </SearchBar>
// );

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Form, Input, Button, Header, Icon} from "./SearchbarStyled"


export class SearchBar extends Component {
  state = {
    search: '',
  };

  onChange = event => {
    this.setState({ search: event.currentTarget.value });
  };

  onSubmit = event => {
    event.preventDefault();
    if (this.state.search.trim() === '') {
     return toast.error('Sorry, no empty search');
   
    }
    this.props.onSubmit(this.state.search);
    this.setState({ search: '' });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.onSubmit}>
          <Input
            onChange={this.onChange}
            value={this.state.search}
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />{' '}
          <Button type="submit">
            <Icon />
          </Button>
        </Form>
      </Header>
    );
  }
}