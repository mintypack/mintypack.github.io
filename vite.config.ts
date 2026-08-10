import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import rehypePrettyCode from 'rehype-pretty-code'
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      "@pages": path.resolve(__dirname, "./src/pages"),
    },
  },
  plugins: [
    // Compile .mdx to plain JS before the React plugins run.
    // remark-frontmatter parses the --- block, remark-mdx-frontmatter
    // re-exports it as `meta`.
    {
      enforce: 'pre',
      ...mdx({
        remarkPlugins: [
          remarkFrontmatter,
          [remarkMdxFrontmatter, { name: 'meta' }],
        ],
        rehypePlugins: [
          [rehypePrettyCode, {
            theme: { light: 'vitesse-light', dark: 'vitesse-dark' },
            keepBackground: false,
          }],
        ],
      }),
    },
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
  ],
})
