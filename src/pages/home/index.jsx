import React from 'react'
import './styles.less'
import Menus from '@@/Menus'
export default class extends React.PureComponent {
  render () {
 
    const { pathname } = this.props.location
    return (
      <div id="pages_home_box">
        <div className="pages_home_menu">
          <Menus pathName={pathname}/>
        </div>
        <div className="pages_home_list">

        </div>
      </div>
    )
  }
}