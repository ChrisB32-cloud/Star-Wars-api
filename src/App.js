import React, { Component } from 'react';
// import { starPeople } from './StarPeople';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starPeople: [],
      searchfield: ''
    };
  }

  componentDidMount() {
    fetch(`https://swapi.dev/api/people/`)
      .then(resp => resp.json())
      .then(results => {
        // console.log(results.results);
        this.setState({ starPeople: results.results });
      });
  }

  // for (let i = 1; i <= 83; i++) {
  //   async function getStar() {
  //     const resp = await fetch(`https://swapi.dev/api/people/${i}/`);
  //     const respData = await resp.json();
  //     console.log(respData);
  //     return respData;
  //   }
  //   getStar();
  // }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { starPeople, searchfield } = this.state;
    const filteredStar = starPeople.filter(starPerson => {
      console.log(starPerson.name);
      return starPerson.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    console.log(filteredStar);
    return (
      <div className="tc">
        <h1 className="f1">Star Wars Universe</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList starPeople={filteredStar} />
      </div>
    );
  }
}

export default App;
