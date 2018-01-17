import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Card extends React.Component {

  constructor(props) {
    super(props)
  }

  getImage(name) {
    return 'assets/' + name.split(' ').join('_') + '-min.jpg'
  }

  render() {
    return  <div className="card-container">
              <div className="card-profile">
                <div className="primary">
                  <img className="card-image" src={this.getImage(this.props.person.name)}/>
                </div>
                <div className="alt"></div>
                <div className="card-info">
                  <p className="card-name card-header"> {this.props.person.role} </p>
                  <p className="card-name"> {this.props.person.name} </p>
                  <p> {this.props.person.major} </p>
                  <p> {this.props.person.year} </p>
                </div>
              </div> 
            </div>
  }
}

class About extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  getCards(cards) {
    var list = []
    for (var x=0; x<cards.length; x++) {
      list.push(<Card key={cards[x]['name']} person={cards[x]}/>)
    }
    console.log(list)
    return list
  }

  render() {
    const cards = this.getCards(this.props.people)
    return  <div className="about-container">
              {cards}
            </div>
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('about')
  const data = document.getElementById('about-data')
  const people = JSON.parse(data.getAttribute('people'))
  console.log(people)

  ReactDOM.render(
    <About people={people['people']} />,
    container.appendChild(document.createElement('div'))
  )
})