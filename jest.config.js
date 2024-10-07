module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'], // Assurez-vous que le chemin est correct
};
