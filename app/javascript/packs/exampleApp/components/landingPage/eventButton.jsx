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
}

export default EventButton
