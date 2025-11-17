// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import string from 'rollup-plugin-string'; // New plugin for raw text

export default {
  input: 'power-flow-card.js',
  output: {
    file: 'dist/power-flow-card.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    string({
      include: '**/*.svg',
    }),
    resolve(),
    terser(),
  ]
};