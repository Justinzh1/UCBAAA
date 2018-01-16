import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleClick() {
  }

  render() {
    return  <div className="footer-container">
              <p> Footer </p>
            </div>
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('footer')

  ReactDOM.render(
    <Footer />,
    container.appendChild(document.createElement('div'))
  )
})