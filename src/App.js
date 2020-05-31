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

  // componentDidMount() {
  //   // let _starPeople = [];
  //   // for (let i = 1; i <= 9; i++) {
  //   //   fetch(`https://swapi.dev/api/people/?page=${i}`)
  //   //     .then(resp => resp.json())
  //   //     .then(result => {

  //   //       for (let j = 0; j < result.results.length; j++) {
  //   //         // console.log(_starPeople);
  //   //         console.log(result.results[j]);
  //   //         _starPeople.push(result.results[j]);
  //   //       }
  //   //       console.log(_starPeople.length);

  //   //       // return this.setState({ starPeople: result.results });
  //   //     })
  //   //     .finally(_ => {
  //   //       return this.setState({ starPeople: _starPeople });
  //   //     });
  //   // }

  //   // <--------------------------

  componentDidMount() {
    let _starPeople = [];

    let i = 1;

    let fetchStarPeople = async index => {
      await fetch(`https://swapi.dev/api/people/?page=${index}`)
        .then(response => {
          if (response.ok) {
            index++;
            let data = response.json();

            return data;
          } else {
            throw new Error(response.status);
          }
        })
        .then(data => {
          for (let j = 0; j < data.results.length; j++) {
            _starPeople.push(data.results[j]);
          }
          console.log(_starPeople);
          this.setState({ starPeople: _starPeople });
          fetchStarPeople(index);
        })
        .catch(error => {
          if (error.message === 404) {
            console.log('There are no more star people to load!');
          } else {
            console.log('error ', error);
          }
          console.log(
            `You just pulled down ${_starPeople.length} star people!`
          );
        });
    };

    let makeCall = async () => {
      await fetchStarPeople(i).finally(_ => {
        console.log('testing');
      });
    };

    makeCall();
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { starPeople, searchfield } = this.state;
    const filteredStar = starPeople.filter(starPerson => {
      // console.log(starPerson.name);
      return starPerson.name.toLowerCase().includes(searchfield.toLowerCase());
    });

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
