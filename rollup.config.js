const babel = require('rollup-plugin-babel')

module.exports = {
    entry: 'src/index.js',
    format: 'cjs',
    plugins: [babel()],
    dest: 'dist/vuept.js'
};
