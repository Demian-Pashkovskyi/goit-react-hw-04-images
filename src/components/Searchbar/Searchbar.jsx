import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Form, Input, Button, Header, Icon} from "./SearchbarStyled"


export class SearchBar extends Component {
  state = {
    query: '',
  };

  onChange = event => {
    this.setState({ query: event.currentTarget.value });
  };

  onSubmit = event => {
    event.preventDefault();
    if (this.state.query.trim() === '') {
     return toast.error('Sorry, no empty search');
   
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.onSubmit}>
          <Input
            onChange={this.onChange}
            value={this.state.query}
            name="query"
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
