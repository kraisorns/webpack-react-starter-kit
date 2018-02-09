const React = require("react")
const ReactDOM = require("react-dom")

import App from "./components/App";

const HelloApp = (message, element) => {
  ReactDOM.render(<App message={message} />, element);
}

/**
 * Uncomment this line when you go dev mode
 */
HelloApp('Webpack', document.getElementById('root'))

module.exports = HelloApp;
