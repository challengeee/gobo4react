import react from '@vitejs/plugin-react-swc'
import { globSync } from 'glob'
import { resolve } from 'path'
import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: [resolve(__dirname, 'src/index.ts')],
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      input: Object.fromEntries(
        globSync('src/**/*.{ts,tsx}').map((file) => [
          path.relative(
            'src',
            file.slice(0, file.length - path.extname(file).length),
          ),
          fileURLToPath(new URL(file, import.meta.url)),
        ]),
      ),
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
  plugins: [react(), dts({ include: ['src/**/!(*.test).{ts,tsx}'] })],
})
