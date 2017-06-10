import React from 'react'

if(typeof window === "object") {
  require('./../../page.css')
}

export default React.createClass({
  render() {
    return <div className="page page1">Page 1 content {(typeof window === "object") && <img src={require('./image1.jpg')} />} </div>
  }
})
