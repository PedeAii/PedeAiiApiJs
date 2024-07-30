/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  preset: "ts-jest",
  moduleFileExtensions: ['ts', 'js'],
  testMatch: ['**/tests/**/*.spec.ts'],
  setupFilesAfterEnv: ['./Kernel/Database/config/global-setup.ts'],
};