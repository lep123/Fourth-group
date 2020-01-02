import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import loader from '@/utils/loader'   // 路由懒加载

const Basic = loader(() => import('@/layouts/Basic'))
const Users = loader(() => import('@/layouts/Users'))
const Home = loader(() => import('@/pages/home'))
const Card = loader(() => import('@/pages/card'))
const Operational = loader(() => import('@/pages/operational'))

const routes = [
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
	render () {
		return(
			<BrowserRouter >
					{renderRoutes(routes)}
			</BrowserRouter>
		)
	}
}
