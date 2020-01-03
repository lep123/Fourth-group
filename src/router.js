import React from 'react';
import {
	BrowserRouter
} from 'react-router-dom'
import {
	renderRoutes
} from 'react-router-config'
import loader from '@/utils/loader' // 路由懒加载

const Basic = loader(() => import('@/layouts/Basic'))
const Users = loader(() => import('@/layouts/Users'))
<<<<<<< HEAD
const Home = loader(() => import('@/pages/home'))
const Card = loader(() => import('@/pages/card'))
const Operational = loader(() => import('@/pages/operational'))
=======
// const Login = loader(() => import('@/pages/login'))
// const Reg = loader(() => import('@/layouts/reg'))
const Home = loader(() => import('@/pages/home'))
// const Echarts = loader(() => import('@/layouts/echarts'))
const Drop = loader(() => import('@/pages/drop'))
// const Home = loader(() => import('@/layouts/home'))
// const Card = loader(() => import('@/layouts/card'))
// const Operational = loader(() => import('@/layouts/operational'))
>>>>>>> 1034720a930a84ac5121d7a1e9c0fadac62398b1

const routes = [{
		component: Users,
		path: '/users',
	},
	{
		component: Basic,
		path: '/',
<<<<<<< HEAD
		routes: [
			{
				component: Home,
				path: '/',
				routes: [
					{
						component: Card,
						path: '/home/card',
					},
					{
						component: Operational,
						path: '/home/operational',
					},
				]
			} 
		]
=======
		routes: [{
			component: Home,
			path: '/',
			routes: [{
					component: Drop,
					path: '/',
				},
				// {
				// 	component: Card,
				// 	path: '/Basic/home/card',
				// },
				// {
				// 	component: Operational,
				// 	path: '/Basic/home/operational',
				// },
				// {
				// 	component: Echarts,
				// 	path: '/Basic/home/echarts',
				// }
			]
		}]
>>>>>>> 1034720a930a84ac5121d7a1e9c0fadac62398b1
	}
]

export default class extends React.PureComponent {
	render() {
		return ( 
			< BrowserRouter > 
				{renderRoutes(routes)} 
			</BrowserRouter>
		)
	}
}