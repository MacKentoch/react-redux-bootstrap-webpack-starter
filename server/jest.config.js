const { jsWithBabel: tsjPreset } = require('ts-jest/presets');

module.exports = {
  preset: 'ts-jest',
  transform: { ...tsjPreset.transform },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'json', 'node'],
  globals: {
    'ts-jest': {
      babelConfig: false,
    },
  },
  testEnvironment: 'node',
  verbose: true,
  // roots: ['<rootDir>/src/', '<rootDir>/src/test'],
  // setupFiles: [],
  // setupFilesAfterEnv: ['<rootDir>/src/test/setupTests.js'],
  // moduleNameMapper: {
  //   '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
  //     '<rootDir>/src/test/__mocks__/fileMock.js',
  //   '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  // },
  coverageDirectory: './coverage/',
  collectCoverage: true,
};
