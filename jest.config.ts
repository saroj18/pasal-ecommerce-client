export default {
  testEnvironment: "jsdom",
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mock CSS imports
    "^@/(.*)$": "<rootDir>/src/$1", // Resolve @ imports
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Use ts-jest to transform TypeScript files
  },
};
