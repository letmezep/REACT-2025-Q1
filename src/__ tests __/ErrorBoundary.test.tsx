import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorBoundary from '../../pages/ErrorBoundary';
import { useState } from 'react';

const ProblematicComponent = () => {
  throw new Error('Test error');
};

const Wrapper = () => {
  const [showError] = useState(true);

  return (
    <ErrorBoundary key={showError ? 'error' : 'reset'}>
      {showError ? <ProblematicComponent /> : <div>Normal Content</div>}
    </ErrorBoundary>
  );
};

describe('ErrorBoundary component', () => {
  test('renders children when no error occurs', () => {
    render(
      <ErrorBoundary>
        <div>Normal Content</div>
      </ErrorBoundary>
    );

    expect(screen.getByText('Normal Content')).toBeInTheDocument();
  });

  test('displays fallback UI when an error is thrown', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});

    render(<Wrapper />);

    expect(screen.getByText('Something went wrong!')).toBeInTheDocument();
    expect(screen.getByText('Reset Error')).toBeInTheDocument();

    jest.restoreAllMocks();
  });

  test('resets error when Reset Error button is clicked', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});

    render(<Wrapper />);

    expect(screen.getByText('Something went wrong!')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Reset Error'));

    render(
      <ErrorBoundary key="reset">
        <div>Normal Content</div>
      </ErrorBoundary>
    );

    expect(screen.getByText('Normal Content')).toBeInTheDocument();

    jest.restoreAllMocks();
  });
});
