/* 
  webpack配置
*/
var path = require('path')

function resolve (pathUrl){
  return path.resolve(__dirname,pathUrl)
}

module.exports = {
  
  devServer : {
    proxy: {
      '/ajax' : {
        target : 'http://m.maoyan.com',
        changeOrigin: true
      }
    }
  }
}