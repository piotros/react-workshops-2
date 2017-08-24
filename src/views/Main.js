import React, {Component} from 'react'
import Link from "../components/Link"

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Link path="/details">Go to details</Link>
        <br/>
        Main
      </div>
    )
  }
}

export default Main