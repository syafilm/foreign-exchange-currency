module.exports = {
  setupFiles: [
    "./jest.setup.js"
  ],
  verbose: true,
  testRegex: "\\.test\(\.js|\.jsx)$",
  moduleNameMapper: {
    "^api(.*)$": "<rootDir>/src/api",
    "^components(.*)$": "<rootDir>/src/components",
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
  },
  moduleDirectories: [
    "node_modules",
  ]
}