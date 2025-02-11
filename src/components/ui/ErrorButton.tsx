import { Component } from 'react';

export default class ErrorButton extends Component {
  state = { throwError: false };

  handleClick = () => {
    this.setState({ throwError: true });
  };

  render() {
    if (this.state.throwError) {
      throw new Error('Testing error');
    }
    return <button onClick={this.handleClick}>Click for Test Error</button>;
  }
}
