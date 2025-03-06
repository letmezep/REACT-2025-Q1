import { Component, ErrorInfo } from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from './types/interfaces';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
    errorKey: 0,
  };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true, errorKey: Date.now() }; // Изменяем key при ошибке
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, errorKey: Date.now() }); // Изменяем key при сбросе
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary__container">
          <h2>Something went wrong!</h2>
          <button className="reset-button" onClick={this.resetError}>
            Reset Error
          </button>
        </div>
      );
    }
    return <div key={this.state.errorKey}>{this.props.children}</div>; // Изменяем key
  }
}

export default ErrorBoundary;


// import { Component, ErrorInfo } from 'react';
// import { ErrorBoundaryProps, ErrorBoundaryState } from './types/interfaces';
// // import { ErrorBoundaryProps, ErrorBoundaryState } from '../src/types/interfaces';

// class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
//   state: ErrorBoundaryState = {
//     hasError: false,
//     errorKey: 0,
//   };

//   static getDerivedStateFromError(): ErrorBoundaryState {
//     return { hasError: true, errorKey: 0 };
//   }

//   componentDidCatch(error: Error, errorInfo: ErrorInfo) {
//     console.error('Error:', error, errorInfo);
//   }

//   resetError = () => {
//     this.setState({ hasError: false });
//   };

//   render() {
//     if (this.state.hasError) {
//       return (
//         <>
//           <div className="error-boundary__container">
//             <h2>Something went wrong!</h2>
//             <button className="reset-button" onClick={this.resetError}>
//               Reset Error
//             </button>
//           </div>
//         </>
//       );
//     }
//     return this.props.children;
//   }
// }

// export default ErrorBoundary;
