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


const Home = loader(() => import('@/pages/home'))
const Card = loader(() => import('@/pages/card'))
const Operational = loader(() => import('@/pages/operational'))
// const Login = loader(() => import('@/pages/login'))
// const Reg = loader(() => import('@/layouts/reg'))
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
		component: Users,
		path: '/users',
	},
	{
		component: Basic,
		path: '/',
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