const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
console.log(path.resolve(__dirname, ''));
console.log(path.join(__dirname,'/'));
module.exports = {
    entry: ['./index.js', './main.js','./start.js'],
    output: {
        filename:"[name].build.js",
    },
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname,'public')
        }
    },
    resolve: {
        alias: {
          '@': path.resolve(__dirname, ''),
        },
      },
    plugins:[new HtmlWebpackPlugin({
        template: './public/index.html'
    })],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    }
}