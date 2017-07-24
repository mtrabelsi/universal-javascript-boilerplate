import React from 'react'

if(typeof window === "object") {
  require('./page.css')
}

const imgUrl = './image2.jpg';

export default React.createClass({
  render() {
    return (<div className="page page2">Page 2 content
      {(typeof window === "object")  && <img src={require(`${imgUrl}`)} />}
    </div>)
  }
})
