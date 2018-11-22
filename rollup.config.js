import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

const config = {
    input: 'static/src/js/main.js',
    output: {
        file: 'static/dist/js/bundle.js',
        format: 'iife',
        sourcemap: 'inline'
    },
    plugins: [
        commonjs({
            sourceMap: false
        }),
        resolve()
    ]
};

export default config;
