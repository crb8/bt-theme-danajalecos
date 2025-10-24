import { defineConfig } from 'vite';

export default {
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: './src/theme/bt-overrides.danajalecos.v1.css',
      output: {
        // Gera nome estável para CDN com sufixo ".v1"
        assetFileNames: 'bt-overrides.danajalecos.v1[extname]',
      },
    },
  },
};
