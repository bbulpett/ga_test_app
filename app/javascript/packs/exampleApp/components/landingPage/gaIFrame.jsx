import React from 'react';

class GAIFrame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {iframeKey: 0};
  }

  componentDidMount() {
    setInterval(function(){
      this.forceUpdate()
      console.log("**** RELOADING IFRAME ****")
    }.bind(this), 5000)
  }

  render() {
    return (
      <div>
        <iframe
          width="600"
          height="480"
          key={this.state.iframeKey}
          src="https://datastudio.google.com/embed/reporting/1jxWBSZRjNGDj3bAxCGmFWuzmP0DVzueZ/page/0S4W"
          frameBorder="0"
          style={{border:0}}
          allowFullScreen
        ></iframe>
      </div>
    )
  }
}

export default GAIFrame