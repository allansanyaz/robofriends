// jest.config.ts
import { createDefaultPreset, JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
    // [...]
    ...createDefaultPreset(),
    preset: "ts-jest",
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
}

export default jestConfig;