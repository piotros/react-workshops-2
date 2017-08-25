import React, {Component} from 'react'
import Link from '../components/Link'
import {
  FormattedMessage,
  FormattedDate,
  FormattedRelative,
  FormattedNumber,
  FormattedTime,
  FormattedPlural
} from 'react-intl'

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      amount: 1
    }
  }

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

        <FormattedDate value={Date.now()}/>

        <br/>

        <FormattedRelative value={'2017-01-10 20:00'}/>

        <br/>

        <FormattedNumber value={'22000.07'}/>

        <br/>

        <FormattedTime value={'2017-08-21 20:00'}/>

        <br/>

        {this.state.amount}{' '}
        <FormattedPlural
          value={this.state.amount}
          one="pieróg"
          few="pierogi"
          many="pierogów"
          other="pieroga"
        />
      </div>
    )
  }
}

export default Main