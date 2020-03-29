const path = require('path')

import resolve from '@rollup/plugin-node-resolve';



const myConfig = {
    input: 'some/nested/src/input.js',
    preserveModules: true,
    output: {
        dir: 'dist/some/nested/src/',
        format: 'es'        
    },
    plugins: [
        resolve()
    ]
}

export default myConfig