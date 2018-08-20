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
    this.sendGAEvent(this.labelText(this.state.isToggleOn))
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

  labelText(toggle_state) {
    toggle_state? 'Like' : 'Unlike'
  }

  sendGAEvent(label) {
    var label_text = label;

    gtag('event', 'Click', {
      'send_to': 'UA-124268690-1',
      'event_category': 'Button Click',
      'event_label': label_text,
      'value': ''
    });
  }
}

export default EventButton
