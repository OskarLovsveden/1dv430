const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
	app.use(
		'/games',
		createProxyMiddleware({
			target: process.env.REACT_APP_IGDB_URL,
			changeOrigin: true
		})
	)

	app.use(
		'/mongo',
		createProxyMiddleware({
			target: 'http://localhost:8000',
			changeOrigin: true
		})
	)

	app.use(
		'/igdb',
		createProxyMiddleware({
			target: 'http://localhost:8000',
			changeOrigin: true
		})
	)
	app.use(
		'/test-env',
		createProxyMiddleware({
			target: 'http://localhost:8000',
			changeOrigin: true
		})
	)
}
