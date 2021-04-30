const path = require('path');
module.exports = {
    entry: './src/app.js',
    watch: true,
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.js',
    },

};