const path = require('path');
const Nodemon = require('nodemon-webpack-plugin');

const {
    mode = 'production',
} = process.argv.reduce((result, arg)=>{
    if (arg.indexOf('--mode=') !== -1){
        result.mode = arg.replace('--mode=','');
    }
    return result;
},{});

module.exports = {
    entry: './src/app.js',
    watch: true,
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.js',
    },
    mode: mode,
    plugins: [],
};

if (mode === 'development'){
    // module.exports.plugin === []
    module.exports.plugins.push(new Nodemon());
    // module.exports.plugin === [Nodemon{}}
}
