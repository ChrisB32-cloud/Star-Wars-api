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
    let _starPeople = [];
    for (let i = 1; i <= 9; i++) {
      fetch(`https://swapi.dev/api/people/?page=${i}`)
        .then(resp => resp.json())
        .then(result => {
          // console.log('page: ', i, result.results);
          // return this.setState({ starPeople: });
          // console.log(typeof this.starPeople);
          for (let j = 0; j < result.results.length; j++) {
            // console.log(_starPeople);
            console.log(result.results[j]);
            _starPeople.push(result.results[j]);
          }
          console.log(_starPeople.length);

          // return this.setState({ starPeople: result.results });
        })
        .finally(_ => {
          return this.setState({ starPeople: _starPeople });
        });
    }
    // return this.setState({ starPeople: _starPeople });

    // for (let i = 1; i <= 82; i++) {
    //   fetch(`https://swapi.dev/api/people/${i}/`)
    //     .then(resp => resp.json())
    //     .then(result => {
    //       console.log(result.results);
    //       return this.setState({ starPeople: result.results });
    //     });
    // }
  }

  //
  //   async function getStar() {
  //     const resp = await fetch(`https://swapi.dev/api/people/${i}/`);
  //     const respData = await resp.json();
  //     console.log(respData);
  //     return respData;
  //   }
  //
  //

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { starPeople, searchfield } = this.state;
    const filteredStar = starPeople.filter(starPerson => {
      // console.log(starPerson.name);
      return starPerson.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    // const filteredStar = starPeople
    //   .map(starGroup => {
    //     const stars = starGroup;
    //     // console.log(stars);
    //     return stars;
    //   })
    //   .filter(starPerson => {
    //     console.log(starPerson.name);
    //     return starPerson.name
    //       .toLowerCase()
    //       .includes(searchfield.toLowerCase());
    //   });

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
