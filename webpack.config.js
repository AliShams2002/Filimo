const path = require('path')


module.exports = {
    mode: 'production',
    entry: './src/js/App.js',
    output: {
        filename: 'final.js',
        path: path.resolve(__dirname, './public/js')
    }
}