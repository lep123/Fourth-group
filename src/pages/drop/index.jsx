
//float  默认none
// width 默认100%
// name 默认name
// headdName 默认空
// secName 默认空
// divHeight 默认0
import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroller' //下拉滚动
import { cards } from '@/actions/card'
import SmallZuneCard from '@/components/smallZuneCard'
import { connect } from 'react-redux'
import Frames from '@/components/frames'
import './styles.less'

export default
@connect(state => {
  const { card } = state.card
  return {
    card
  }
}, {
  cards
})
class extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [],
			page: 1,
			count: '',
		}
    this.loadFunc()
	}
	loadFunc = (page = 1) => {
		const { data, count } = this.state
		if (count && data.length >= count) {
			return false
    }
    this.props.cards({
      			key: 'ada574dcfc85ea2a35fac4d3323f6667',
      			keywords: "美食",
      			city: "北京",
      			page,
      			offset: 20,
      		})
	}
	render() {
    const { card = [] } = this.props
    console.log(card)
    const headName = '啊实打实大苏打serge如果verge让他和个人丢v和'
    const secName = '123123132132132132132132132132132'
		return (
			<div style={{height:'700px',overflow:'auto'}} className="ble">
				<InfiniteScroll
          initialLoad={false}
          pageStart={1}
          loadMore={this.loadFunc}
          useWindow={false}
          hasMore={true}
          loader={<div className="loader" key={0}>Loading ...</div>}
        >
          {
            card.map((v, k) => {
              return (
                <SmallZuneCard
                  key={k}
                  data={v}
                  float='left'
                  width='33.33%'
                  headName={headName}
                  secName={secName}
                  divHeight="40px"
                />
              )
            })
          }
        </InfiniteScroll>
        <Frames />
			</div>
		)
	}
}
