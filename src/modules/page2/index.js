import React from 'react'

if(typeof window === "object") {
  require('./page.css')
}

export default React.createClass({
  render() {
    return (<div className="page page2">Page 2 content
      {(typeof window === "object")  && <img src={require('./image2.jpg')} />}
    </div>)
  }
})
