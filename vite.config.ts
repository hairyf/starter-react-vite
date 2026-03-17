import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import autoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import pages from 'vite-plugin-pages'

// https://vite.dev/config/
export default defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    autoImport({
      dts: 'src/type/auto-imports.d.ts',
      imports: [
        'react',
        'react-router-dom',
      ],
      dirs: [
        'src/config',
        'src/components',
        'src/layout/index.ts',
        'src/service',
        'src/store/index.ts',
        'src/utils',
        'src/hooks',
        'src/apis',
      ],
    }),
    tailwindcss(),
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    pages(),
  ],
})
