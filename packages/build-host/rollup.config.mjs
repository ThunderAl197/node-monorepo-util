import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'

function bundle(config) {
  return {
    ...config,
    input: 'src/index.ts',
    external: id => !/^[./]/.test(id),
  }
}

export default [
  bundle({
    plugins: [esbuild()],
    output: [
      {
        dir: 'dist',
        format: 'cjs',
        sourcemap: true,
        entryFileNames: '[name].js',
      },
      {
        dir: 'dist',
        format: 'es',
        sourcemap: true,
        entryFileNames: '[name].mjs',
      },
    ],
  }),
  bundle({
    plugins: [dts()],
    output: {
      dir: 'dist',
      format: 'es',
    },
  }),
]
