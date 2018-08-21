import React from 'react'
import EventButton from './landingPage/eventButton'
import GAIFrame from './landingPage/gaIFrame'
import Link from './landingPage/link'

class LandingPage extends React.Component {
  render() {
    return(
      <div>
        <h1>Google Analytics Test App</h1>
        <div className='buttonRow'>
          <EventButton type='like' />
          <EventButton type='unlike' />
        </div>
        <GAIFrame />
        <small>Statistics are delayed because that's how GA reporting is 🤷‍♂️</small>
        <Link
          linkMessage='(The code for this is here)'
          linkRef='https://github.com/bbulpett/ga_test_app'
        />
      </div>
    )
  }
}

export default LandingPage
