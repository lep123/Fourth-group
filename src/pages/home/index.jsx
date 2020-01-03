import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import './styles.less'
export default class  extends Component {
  render() {
    return (
        <div className='app'>
            {renderRoutes(this.props.route.routes)}
            
        </div>
    )
  }
}
