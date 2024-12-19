import { buildEslintCommand } from './path-to-eslint-command'; // Adjust the import path as necessary

const lintStagedConfig = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
};

export default lintStagedConfig;
