const React = require('react')
import "../assets/App.css"

export default class App extends React.Component {
  render() {
    return(
      <h1 className="Hello">Hello, World!, {this.props.message}</h1>
    )
  }
}