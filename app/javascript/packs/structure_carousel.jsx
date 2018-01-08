import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class StructureCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  getImageLink() {
    return "assets/" + this.props.structure.path + "_white.svg"
  }

  render() {
    return  <div className="structure-card">
              <p className="card-text"> {this.props.structure.path} </p>
              <img src={this.getImageLink()}/>
            </div>
  }
}

class StructureCarousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      structure: this.props.structure
    }
  }

  render() {
    var items = []
    for (let key of Object.keys(this.state.structure)) {
      items.push((<StructureCard key={key} structure={this.state.structure[key]}/>))
    }
    return  <div>
              {items}
            </div>
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('structure-data')
  const container = document.getElementById('structure-cards')
  const data = JSON.parse(node.getAttribute('data'));

  ReactDOM.render(
    <StructureCarousel structure={data}/>,
    container.appendChild(document.createElement('div'))
  )
})