module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['lib/**/*.js', '!lib/client.js', '/examples/**'],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/lib/$1',
    '^~~$': '<rootDir>',
    '^@@$': '<rootDir>',
    '^@/(.*)$': '<rootDir>/lib/$1'
  },
  transform: {
    '^.+\\.js$': 'babel-jest'
  }
}
