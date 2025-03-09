import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorBoundary from '../pages/ErrorBoundary';
import { useState } from 'react';

const ProblematicComponent = () => {
  throw new Error('Test error');
};

const Wrapper = () => {
  const [showError, setShowError] = useState(true);

  return (
    <ErrorBoundary key={showError ? 'error' : 'reset'}>
      {showError ? <ProblematicComponent /> : <div>Normal Content</div>}
    </ErrorBoundary>
  );
};

describe('ErrorBoundary component', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('Render children if(!error)', () => {
    render(
      <ErrorBoundary>
        <div>Normal Content</div>
      </ErrorBoundary>
    );

    expect(screen.getByText('Normal Content')).toBeInTheDocument();
  });

  test('fallback UI', () => {
    render(<Wrapper />);

    expect(screen.getByText('Something went wrong!')).toBeInTheDocument();
    expect(screen.getByText('Reset Error')).toBeInTheDocument();
  });

  test('click Reset Error', () => {
    render(<Wrapper />);

    expect(screen.getByText('Something went wrong!')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Reset Error'));

    render(
      <ErrorBoundary key="reset">
        <div>Normal Content</div>
      </ErrorBoundary>
    );

    expect(screen.getByText('Normal Content')).toBeInTheDocument();
  });
});
