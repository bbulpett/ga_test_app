import React from 'react'

class GAIFrame extends React.Component {
  constructor(props){
    super(props)

    this.state = { time: Date.now() }
  }

  componentDidMount() {
    console.log("**** UPDATING IFRAME ****")
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 10000)
  }

  componentWillUnmount() {
    this.clearInterval(this.interval)
  }

  render() {
    return (
      <div className={'ifr'}>
        <iframe
          width="600"
          height="480"
          key={this.state.time}
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
