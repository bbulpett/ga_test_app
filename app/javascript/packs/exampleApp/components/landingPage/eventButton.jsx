import React from 'react';

class EventButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
    var text = this.labelText()
    this.sendGAEvent(text);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? this.likeText() : this.unlikeText()}
      </button>
    );
  }

  likeText() {
    return (<span>Like &#x1f44d;</span>)
  }

  unlikeText() {
    return (<span>Unlike &#x1f44e;</span>)
  }

  labelText() {
    return (
      this.state.isToggleOn ? 'Like' : 'Unlike'
    )
  }

  sendGAEvent(label) {
    console.log(`***** SENDING ${label} BUTTON CLICK EVENT TO GA *****`);

    gtag('event', 'Click', {
      'send_to': 'UA-124268690-1',
      'event_category': 'Button Click',
      'event_label': `${label}`,
      'value': ''
    });
  }
}

export default EventButton
