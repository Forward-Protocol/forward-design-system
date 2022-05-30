import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import { defineConfig } from 'rollup';
import commonjs from 'rollup-plugin-commonjs';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';
import externals from 'rollup-plugin-node-externals';
import postcss from 'rollup-plugin-postcss';

export default defineConfig({
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/cjs/index.js',
      format: 'commonjs',
    },
    {
      dir: 'dist/esm',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  ],
  external: [
    'react',
    'react/jsx-runtime',
    '@forward-protocol/ui-icons',
    'react-switch',
    'clsx',
    'tslib',
    'react-merge-refs',
  ],
  plugins: [
    url({ destDir: 'dist/assets' }),
    svgr({ icon: true, ref: true, memo: true }),
    externals(),
    nodeResolve(),
    commonjs(),
    typescript({
      declaration: true,
      declarationDir: 'dist/esm',
      rootDir: 'src',
    }),
    postcss({
      extract: 'index.css',
      minimize: true,
      modules: true,
      use: {
        sass: {
          data: '@import "src/assets/styles/index.scss";',
        },
        less: null,
        stylus: null,
      },
    }),
    copy({
      hook: 'writeBundle',
      targets: [
        { src: 'dist/esm/index.css', dest: 'dist/assets/styles' },
        {
          src: 'src/assets/styles/_colors.scss',
          dest: 'dist/assets/styles',
        },
        { src: 'src/assets/styles/_fonts.scss', dest: 'dist/assets/styles' },
        { src: 'src/assets/styles/_mixins.scss', dest: 'dist/assets/styles' },
        { src: 'src/assets/fonts/*', dest: 'dist/assets/fonts' },
        { src: 'package.json', dest: 'dist' },
        { src: 'README.md', dest: 'dist' },
      ],
    }),
    del({
      hook: 'closeBundle',
      targets: ['dist/esm/index.css', 'dist/cjs/index.css'],
    }),
  ],
});
