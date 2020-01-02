import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import loader from '@/utils/loader'   // 路由懒加载

const Basic = loader(() => import('@/layouts/Basic'))
const Users = loader(() => import('@/layouts/Users'))
// const Login = loader(() => import('@/pages/login'))
// const Reg = loader(() => import('@/layouts/reg'))
// const Home = loader(() => import('@/layouts/home'))
// const Echarts = loader(() => import('@/layouts/echarts'))
// const Drop = loader(() => import('@/layouts/drop'))
// const Home = loader(() => import('@/layouts/home'))
// const Card = loader(() => import('@/layouts/card'))
// const Operational = loader(() => import('@/layouts/operational'))

const routes = [
	{
		component: Users,
		path: '/users',
		// routes: [
		// 	{
		// 		component: Login,
		// 		path: '/users/login', 
		// 	},
		// 	{
		// 		component: Reg,
		// 		path: '/users/reg', 
		// 	}
		// ]
	},
	{
		component: Basic,
		path: '/',
		// routes: [
		// 	{
		// 		component: Home,
		// 		path: '/Basic/home',
		// 		routes: [
		// 			{
		// 				component: Home,
		// 				path: '/Basic/home',
		// 				routes: [
		// 					{
		// 						component: Drop,
		// 						path: '/Basic/home/drop',
		// 					},
		// 					{
		// 						component: Card,
		// 						path: '/Basic/home/card',
		// 					},
		// 					{
		// 						component: Operational,
		// 						path: '/Basic/home/operational',
		// 					},
		// 					{
		// 						component: Echarts,
		// 						path: '/Basic/home/echarts',
		// 					}
		// 				]
		// 			}
		// 		]
		// 	} 
		// ]
	}
]

export default class extends React.PureComponent {
	render () {
		return(
			<BrowserRouter >
					{renderRoutes(routes)}
			</BrowserRouter>
		)
	}
}
