// nothing seems to be working....I'm sorry.....
import React, { Component } from 'react';
import './App.css';
import { allData } from './action/action';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  this.state = {
    "Ivel Z3": {
      manufacturer: "Ivasim",
      year: 1969,
      origin: "Croatia"
    },
    "Bally Astrocade": {
      manufacturer: "Bally Consumer Products",
      year: 1977,
      origin: "USA"
    },
    "Sord M200 Smart Home Computer": {
      manufacturer: "Sord Computer Corporation",
      year: 1971,
      origin: "Japan"
    },
    "Commodore 64": {
      manufacturer: "Commodore",
      year: 1982,
      origin: "USA"
    }
  }
  this.updateSelection= this.updateSelection.bind(this)
  this.showingData= this.showingData.bind(this)
  }
  showingData = () => {
    this.props.allData()
  }

  updateSelection = (select) => {
    this.setState({state: select.target.value});
  }
  render() {
    return (
      <div className="App">
      <select value={this.state.value} onChange={this.updateSelection}>
        <option>-- pick a model --</option>
      {Object.keys(this.state).map(computer => {
        return <option key={computer} value={computer}>{computer}</option>
      })}
      </select>
      <button onClick={allData}>Add</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  }
}

export default connect(mapStateToProps, { allData })(App)
