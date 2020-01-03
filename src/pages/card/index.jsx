import React from 'react'
import { connect } from 'react-redux'
import './styles.less'
import { getCartData } from '@/actions/home'

export default 
@connect((state) => ({
  cardData: state.index.cardData
}), {
  getCartData
})
class extends React.PureComponent {
  componentDidMount () {
   
    this.props.getCartData()
  }
  render () {
    const { cardData } = this.props
      
    return (
      <div>
        {
          cardData.map((v, k) => (
            <div key={k}>{v.name}</div>
          ))
        }
      </div>
      
    )
  }
}
