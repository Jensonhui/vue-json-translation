module.exports = {
	assetsDir: 'static',
	publicPath: 'vue-json-translation',
  filenameHashing: false,
  productionSourceMap: false,
	devServer: {
		open: false,
		host: 'localhost',
		port: 80,
		https: false,
		proxy: 'https://fanyi-api.baidu.com/'
	}
}
