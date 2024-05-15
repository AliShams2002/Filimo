const path = require('path')


module.exports = {
    mode: 'production',
    entry: './src/js/MoviePage/app.js',
    output: {
        filename: 'movie.js',
        path: path.resolve(__dirname, './public/js')
    }
}