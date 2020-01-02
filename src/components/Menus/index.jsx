import React from 'react'
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'

export default class Sider extends React.Component {

  render() {

    const { pathName } = this.props
   
    return (
      <Menu
        style={{ width: '100%' }}
        selectedKeys={[pathName]}
        mode="inline"
      >
        <Menu.Item key="/">
          <Link to='/'>下拉加载</Link>
        </Menu.Item>
        <Menu.Item key="/home/card">
          <Link to='/home/card'>卡片展示</Link>
        </Menu.Item>
        <Menu.Item key="/home/operational">
          <Link to='/home/operational'>添加数据</Link>
        </Menu.Item>
        <Menu.Item key="/home/echarts">
          <Link to='/home/echarts'>echarts图表</Link>
        </Menu.Item>
      </Menu>
    )
  }
}