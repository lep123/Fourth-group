import React, { Component } from 'react'
import LazyLoad from 'react-lazyload';
import './styles.less'
export default class extends Component {
  render() {
      const { data = {}, float = 'none', width = '100%', headName = '', secName = '', divHeight = 0 } = this.props
      // console.log(this.props.data)
    return (
      <div 
        className="smollCard"
        style={{width,float,padding:10}}
        >
        
        <div className="sec">
          <p>{headName}</p>
          <p className="secName" style={{marginBottom:30}}>{secName}</p>
          <hr></hr>
          <div className="yuiEventAndNode" style={{height:divHeight}}>
            <LazyLoad scrollContainer=".drop" height={-50} overflow={true}>
              <img src={data.photos[1].url} alt="1" className="images" />
            </LazyLoad>
            <p className="imgName">
              {data.name}
            </p>
            <button>Bookmark</button>
          </div>
        </div>
        
      </div>
    )
  }
}
