import React from 'react';

class EventButton extends React.Component {
  handleClick() {
    var text = this.props.type.replace(/^\w/, c => c.toUpperCase())
    this.sendGAEvent(text)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.props.type === 'like' ? this.likeText() : this.unlikeText()}
        </button>
      </div>
    );
  }

  likeText() {
    return (<span>Like &#x1f44d;</span>)
  }

  unlikeText() {
    return (<span>Unlike &#x1f44e;</span>)
  }

  sendGAEvent(label) {
    gtag('event', 'Click', {
      'send_to': 'UA-124268690-1',
      'event_category': 'Button Click',
      'event_label': `${label}`,
      'value': ''
    })
  }
}

export default EventButton
