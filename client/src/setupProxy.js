const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
	app.use(
		'/games',
		createProxyMiddleware({
			target: process.env.REACT_APP_IGDB_URL,
			changeOrigin: true
		})
	)
}
