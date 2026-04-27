import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite';
import os from 'node:os';

const isWsl = os.release().toLowerCase().includes('microsoft');

export default defineConfig({
  plugins: [devtools(), solidPlugin()],
  server: {
    port: 3000,
    // Use polling in WSL to catch file changes from Windows-mounted drives.
    watch: isWsl
      ? {
          usePolling: true,
          interval: 100,
        }
      : undefined,
  },
  build: {
    target: 'esnext',
  },
});
