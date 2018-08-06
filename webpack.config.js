var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = {
   entry: './main.js',
   output: {
      path:path.resolve('/', 'output'),
      filename: 'index.js',
   },
   devServer: {
      inline: true,
      port: 8080
   },
   
   module: {
   rules: [
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: 'css-loader!less-loader'
          })
      },
    ],
      rules: [
         {
            test: /\.jsx?$/, 
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react'],
               plugins: ['transform-class-properties']
                   
            }
         }
      ]
   }
}
module.exports = config;