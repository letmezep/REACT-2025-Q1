// import '@testing-library/jest-dom/extend-expect';
require('@testing-library/jest-dom');
// import '@testing-library/jest-dom';

global.fetch = jest.fn(() => 
Promise.resolve({
    json: () => Promise.resolve({ results: [] }),
}));