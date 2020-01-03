import React from 'react'
import { connect } from 'react-redux'
import './styles.less'
import { getCartData } from '@/actions/home'
import imgs from '@/assets/1.png'
import userImgs from '@/assets/01.png'
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
    console.log(cardData,'++++++++++++')
    return (
      <div id="pages_card_box">
         
        {
          cardData.map((v, k) => (
            <div key={k} className="pages_card_list">
              
              <div className="pages_card_top">
               <img src={imgs} alt=""/>
              </div>
              <div className="pages_card_btm">
                <img src={userImgs} alt="" className="pages_card_userImgs"/>
                 <h3>{v.gender}</h3>
                 <p> 
                   {v.hospital}
                 </p>
              </div>
            </div>
          ))
        }
      </div>
      
    )
  }
}
