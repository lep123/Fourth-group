<<<<<<< HEAD
import React from 'react'
import './styles.less'
import Menus from '@@/Menus'
import { renderRoutes } from 'react-router-config'
export default class extends React.PureComponent {
  state = {
    menuData: [
      {
        title: '',
        path: '',
        key: '',
      }
    ]
  }
  render () {
 
    const { pathname } = this.props.location
    return (
      <div id="pages_home_box">
        <div className="pages_home_menu">
          <Menus pathName={pathname}/>
        </div>
        <div className="pages_home_list">
          {renderRoutes(this.props.route.routes)}
        </div>
      </div>
    )
  }
}
=======
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
>>>>>>> 1034720a930a84ac5121d7a1e9c0fadac62398b1
