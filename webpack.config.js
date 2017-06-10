var HtmlWebpackPlugin =  require('html-webpack-plugin')
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
// uncomment the next line to show more errors
//process.traceDeprecation = true
module.exports = {
  entry : './src/app.js',
  output : {
    path : './dist',
    filename : 'app.bundle.js'
  },
  plugins : [/* new HtmlWebpackPlugin({
    title : 'title from webpack',
    hash : true,
    template : './config/index.ejs',
    filename : 'index.ejs'
  }), */
  new ExtractTextWebpackPlugin('app.bundle.css')],
  module : {
    rules : [{
      test : /\.css$/,
      use : ExtractTextWebpackPlugin.extract({
        fallback : 'style-loader',
        use: 'css-loader'
      })
    },{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['react','es2015']
      }
    },{
      test : /\.jpg$/,
      exclude: /(node_modules)/,
      loader : 'file-loader'
    }]
  }
}
