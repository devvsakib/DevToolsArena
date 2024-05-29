module.exports = {
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1'
    },
    moduleFileExtensions: [
      'js',
      'jsx',
      'vue'
    ],
    transform: {
      '^.+\\.js$': 'babel-jest',
      '^.+\\.jsx?$': 'babel-jest',
      '^.+\\.vue$': 'vue-jest'
    }
  }
  