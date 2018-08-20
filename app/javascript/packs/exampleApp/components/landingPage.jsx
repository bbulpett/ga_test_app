import React from 'react';
import EventButton from './landingPage/eventButton';
import GAIFrame from './landingPage/gaIFrame';

class LandingPage extends React.Component {
  render() {
    return(
      <div>
        <h1>Google Analytics Test App</h1>
        <EventButton />
        <GAIFrame />
      </div>
    )
  }
}
export default LandingPage
