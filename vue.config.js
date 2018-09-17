module.exports = {
	// 基本路径
	baseUrl: '/',
	// 输出文件目录
	outputDir: 'dist',
	devServer: {
		open: process.platform === 'darwin',
		host: '0.0.0.0',
		port: 8080,
		https: false,
		hotOnly: false,
		// 设置代理
		/*proxy: { 
			'/mp': {
	          target:'http://locahost:3000',
	          changeOrigin:true,
	          pathRewrite:{
	              '/mp': '/mp'
	            }
	        }
		},*/ 
		before: app => {}
	}
}