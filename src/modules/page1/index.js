import React from 'react'

if(typeof window === "object") {
  require('./page.css')
}

const imgUrl = './image1.jpg';

export default React.createClass({
  render() {
    return <div className="page page1">Page 1 content {(typeof window === "object") && <img src={require(`${imgUrl}`)} />} </div>
  }
})
