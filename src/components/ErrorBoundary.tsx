import { Component, ErrorInfo } from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from '../services/interfaces';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error:', error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <>
          <div className="error-boundary__container">
            <h2>Something went wrong!</h2>
            <button className="reset-button" onClick={this.resetError}>
              Reset Error
            </button>
          </div>
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
