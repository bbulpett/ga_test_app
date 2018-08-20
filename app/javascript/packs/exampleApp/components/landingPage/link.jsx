import React from 'react'

class Link extends React.Component {
  render() {
    return (
      <div>
        <a
          href={this.props.linkRef}
          alt={`link to ${this.props.linkMessage}`}
          target='_blank'
        >
          {this.props.linkMessage}
        </a>
      </div>
    )
  }
}

export default Link