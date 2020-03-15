const { jsWithBabel: tsjPreset } = require('ts-jest/presets');

module.exports = {
  preset: 'ts-jest',
  transform: { ...tsjPreset.transform },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json',
      babelConfig: false,
    },
  },
  testEnvironment: 'jest-environment-jsdom-fifteen',
  verbose: true,
  roots: ['<rootDir>/src/', '<rootDir>/test'],
  setupFiles: [],
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/test/__mocks__/fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  coverageDirectory: './coverage/',
  collectCoverage: true,
};
