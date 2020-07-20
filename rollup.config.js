import fs from 'fs'
import { terser } from 'rollup-plugin-terser'

const outFile = 'react-dom.development.mjs'

export default [
  {
    input: 'node_modules/react-dom/cjs/react-dom.development.js',
    plugins: [
      terser(),
      {
        writeBundle(bundle) {
          fs.writeFileSync(outFile,
            fs.readFileSync(outFile, 'utf-8')
              .replace('process.env.NODE_ENV', JSON.stringify('development'))
          )
        }
      }
    ],
    output: { file: outFile, format: 'esm' }
  }
]
