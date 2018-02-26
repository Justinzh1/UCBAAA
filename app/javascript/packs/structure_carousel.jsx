import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class StructureBadge extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return  <div className="structure-badge">
              <p>{this.props.number}</p>
            </div>
  }
}

class StructureCard extends React.Component {

  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
    }
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleUpdate() {
    console.log("THIS IS MY KEY " + this.props)
    this.props.update(this.props.value);
  }

  getImageLink() {
    return "assets/" + this.props.structure.path + "_white.svg"
  }

  render() {
    return  <div 
              onClick={this.handleUpdate}
              className="structure-card">
              <StructureBadge number={this.props.structure.number}/>
              <p className="card-text"> {this.props.structure.path} </p>
              <img src={this.getImageLink()}/>
            </div>
  }
}

class StructureDetails extends React.Component {

  constructor(props) {
    super(props)
  }

  getImageLink() {
    return "assets/" + this.props.structure.path + "_white.svg"
  } 

  capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
  }

  getPerk(str) {
    return  <div className="grid-row">
              <div className="grid-box"></div>
              <div className="grid-item">{str}</div>
            </div>
  }
  
  getPerks(perks) {
    var divs = []
    for (var x=0; x<perks.length; x++) {
      divs.push(this.getPerk(perks[x]))
    }
    console.log(divs)
    return divs
  }

  getPerksCards(perks) {
    var cards = []
    for (var x=0; x<perks.length; x++) {
      cards.push(<PositionsCards key={x} name={perks[x]} image={"assets/" + perks[x].split(' ').join('_') + ".svg"}/>)
    }
    return cards
  }

  render() {
    const perks = this.getPerks(this.props.structure.perks)
    const details = this.getPerks([this.props.structure.commitment, this.props.structure.dues])
    const cards = this.getPerksCards(this.props.structure.positions)

    return  <div className="structure-detail">
              <div className="structure-grid">
                <div className="grid-id">
                  <p className="id-text"> {this.props.structure.num}. {this.props.structure.verbose}</p>
                </div>
                <div className="grid-inside">
                  <div className="grid-gutter-left"></div>
                  <div className="grid-card">
                    <img className="grid-image" src={this.getImageLink()}/>
                  </div>
                  <div className="grid-description">
                    <p>{this.props.structure.description}</p>
                    <div className="grid-button"><a class="link" href="https://goo.gl/forms/5qNK0NxwnV5BAG9J2">Register</a></div>
                  </div>
                </div>
                <div className="grid-info">
                  <div className="grid-perks">
                    <p className="grid-title"> Perks </p>
                    {perks}
                  </div>
                  <div className="grid-perks">
                    <p className="grid-title"> Details </p>
                    {details}
                  </div>
                </div>
                <div className="grid-info">
                  <div className="grid-header">
                    <p className="id-text"> a. Positions </p>
                  </div>
                  <div className="grid-container">
                    {cards}
                  </div>
                </div>
              </div>
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

  handleUpdate(key) {
    this.props.update(key)
  }

  render() {
    var items = []
    for (let key of Object.keys(this.state.structure)) {
      items.push((<StructureCard value={key} key={key} update={(key) => this.handleUpdate(key)} structure={this.state.structure[key]}/>))
    }
    return  <div id="structure-cards">
              {items}
            </div>
  }
}

class Structure extends React.Component {

  constructor(props) {
    super(props)
    const key = this.props.active
    console.log(key);
    var structure = this.getStructure(key)

    this.state = {
      key: key, structure: structure
    }
  }

  getStructure(key) {
    return this.props.structure[key]
  }

  handleSwitch(key) {
    var structure = this.getStructure(key)
    this.setState({ key: key, structure: structure})
  }

  render() {
    return  <div>
              <StructureCarousel structure={this.props.structure} update={(value) => this.handleSwitch(value)}/>
              <StructureDetails name={this.state.key} structure={this.state.structure}/>
            </div>
  }
}

class PositionsCards extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return  <div className="perk-badge">
              <img className="perk-image" src={this.props.image} />
              <p className="perk-label"> {this.props.name} </p>
            </div> 
  } 
}

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('structure-data')
  const container = document.getElementById('structure-container')
  const data = JSON.parse(node.getAttribute('data'))
  const active = node.getAttribute('active')
  console.log(active)

  ReactDOM.render(
    <Structure structure={data} active={active} />,
    container.appendChild(document.createElement('div'))
  )

})