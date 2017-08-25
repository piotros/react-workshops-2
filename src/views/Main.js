import React, {Component} from 'react'
import Link from '../components/Link'
import {FormattedMessage} from 'react-intl'

class Main extends Component {
  render() {
    return (
      <div className="main">
        <FormattedMessage
          id="Main.first-message"
          description="Welcome message used on main screen"
          defaultMessage={'Welcome from {name}!'}
          values={{name: 'React'}}/>
        <Link path="/details">Go to details</Link>
        <br/>
        Main
      </div>
    )
  }
}

export default Main