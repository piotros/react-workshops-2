import React, {Component} from 'react'
import Link from "../components/Link"

class Details extends Component {
  render() {
    return (
      <div className="details">
        <Link path="/">Go to main</Link>
        <br/>
        Details
      </div>
    )
  }
}

export default Details