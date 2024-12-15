export default {
  preset: 'ts-jest', // Use ts-jest for TypeScript transformation
  testEnvironment: 'jsdom', // Simulate the browser environment
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'], // run before testing, useful for setting up test environment
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock CSS files
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Transform TypeScript files
    '^.+\\.(js|jsx|ts|tsx)$': 'esbuild-jest', // Use esbuild for JavaScript/ESM
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-leaflet|@react-leaflet|leaflet|other-esm-dependency)/)', // Transform ESM dependencies
  ],
};