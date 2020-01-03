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

const Registered = loader(() => import('@/pages/registered'))
const Login = loader(() => import('@/pages/login'))

// const Login = loader(() => import('@/pages/login'))
// const Reg = loader(() => import('@/layouts/reg'))
const Home = loader(() => import('@/pages/home'))
// const Echarts = loader(() => import('@/layouts/echarts'))
const Drop = loader(() => import('@/pages/drop'))
// const Home = loader(() => import('@/layouts/home'))
// const Card = loader(() => import('@/layouts/card'))
// const Operational = loader(() => import('@/layouts/operational'))

const routes = [
	{
		component: Users,
		path: '/users',
	},
	{
		component: Login,
		path: '/login',
	},
	{
		component: Registered,
		path: '/registered',
	},
	{
		component: Basic,
		path: '/',
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