import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color
    }
    this.handleClick = this.handleClick.bind(this)
  }

  get_color() {
    return {
      color: this.state.color
    }
  }

  handleClick() {
    console.log("Redirecting")
    window.location.href = "/"
  }

  render() {
    return  <div className="nav-container">
              <img onClick={this.handleClick} className="AAA" src={this.props.logo_path} />
              <div className="nav-row">
                <a className="nav-link" style={{color: this.state.color}}>History </a>
                <a className="nav-link" style={{color: this.state.color}}>Events </a>
                <a className="nav-link" style={{color: this.state.color}}> Login </a>
              </div>
            </div>
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('nav_data')
  const container = document.getElementById('nav')
  const data = node.getAttribute('data')
  const color = node.getAttribute('color')

  ReactDOM.render(
    <Navbar logo_path={data} color={color}/>,
    container.appendChild(document.createElement('div'))
  )
})