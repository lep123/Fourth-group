const proxy = require('http-proxy-middleware');
module.exports = function (app) {
<<<<<<< HEAD
	// api 表示代理路径
	// target 表示目标服务器的地址
	app.use(proxy('/api', {
		target: 'http://api.baxiaobu.com',
		// 跨域时 一般都设置该值 为 true
		changeOrigin: true,
		// 重写接口路由
		pathRewrite: {
			'^/api': ''  // 这样处理后, 最终得到的接口路径为: 
		}
	}
	))
=======
    // api 表示代理路径
    // target 表示目标服务器的地址
    app.use(proxy('/aps', {
        target: 'https://blogs.zdldove.top',
        // 跨域时 一般都设置该值 为 true
        changeOrigin: true,
        // 重写接口路由
        pathRewrite: {
            '^/aps': ''  // 这样处理后, 最终得到的接口路径为: 
        }
    }
    ));
>>>>>>> 1034720a930a84ac5121d7a1e9c0fadac62398b1
}