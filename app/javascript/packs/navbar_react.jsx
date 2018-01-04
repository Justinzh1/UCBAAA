import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Navbar extends React.Component {

  constructor(props) {

  }

  render() {
    return  <div className="nav-container">
              <img className="AAA" src={this.props.logo_path} />
              <div className="nav-row">
                <a className="nav-link"> History </a>
                <a className="nav-link"> Events </a>
                <a className="nav-link"> Login </a>
              </div>
            </div>
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('nav_data')
  const container = document.getElementById('nav')
  const data = node.getAttribute('data')

  ReactDOM.render(
    <Navbar logo_path={data}/>,
    container.appendChild(document.createElement('div'))
  )
})