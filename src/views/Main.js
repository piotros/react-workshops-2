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
      amount: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({amount: prevState.amount + 0.5}))
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div className="main">
        <Link path="/details">Go to details</Link>

        <br/>

        <FormattedMessage
          id="Main.first-message"
          description="Welcome message used on main screen"
          defaultMessage={'Welcome from {name}!'}
          values={{name: 'React'}}/>

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
          zero="pierogów"
          one="pieróg"
          few="pierogi"
          many="pierogów"
          other="pieroga"
        />

        <br/>

        <FormattedMessage
          id="fm.pierogi"
          description="Plural for pierogies"
          defaultMessage={`{amount, plural, =0 {no pierogies} one {# pierogi} other {# pierogies}}`}
          values={{amount: this.state.amount}}
        />
      </div>
    )
  }
}

export default Main