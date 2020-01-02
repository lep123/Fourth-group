import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import loader from '@/utils/loader'   // 路由懒加载

const App = loader(() => import('@/pages/app'))

const route = [
    {
        component: App,
        router: [
        ]
    }
]

export default class extends React.PureComponent {
    render () {
        return(
            <BrowserRouter >
                {renderRoutes(route)}
            </BrowserRouter>
        )
    }
}
