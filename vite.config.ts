import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {resolve} from 'path';

// https://vitejs.dev/config/

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'public');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: outDir,
  },
  resolve: {
    alias: {
      '@components': resolve(root, 'components'),
      '@hooks': resolve(root, 'hooks'),
      '@store': resolve(root, 'store'),
      '@services': resolve(root, 'services'),
      '@Errors': resolve(root, 'Errors'),
    },
  },
});
