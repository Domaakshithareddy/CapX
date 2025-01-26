// jest.config.js
export default {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
};





// // jest.config.js
// export default {
//   preset: 'react', // Ensure Jest uses the react preset
//   transform: {
//     '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Use Babel for transforming JS/JSX
//   },
//   testEnvironment: 'jest-environment-jsdom', // Use jsdom for browser-like environment
//   setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'], // Set up file for testing
//   moduleNameMapper: {
//     '\\.(css|less|sass|scss)$': 'identity-obj-proxy', // Mock stylesheets
//   },
// };
