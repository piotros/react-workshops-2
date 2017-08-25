import React, {Component} from 'react'
import Link from "../components/Link"

import {defineMessages, injectIntl} from 'react-intl'

import ShowFromProps from '../components/ShowFromProps'

const messages = defineMessages({
  showFromProps: {
    id: 'showFromProps.text',
    defaultMessage: 'Some text'
  }
})

class Details extends Component {
  render() {
    const {formatMessage} = this.props.intl

    return (
      <div className="details">
        <Link path="/">Go to main</Link>

        <br/>

        <ShowFromProps text={formatMessage(messages.showFromProps)}/>
      </div>
    )
  }
}

export default injectIntl(Details)