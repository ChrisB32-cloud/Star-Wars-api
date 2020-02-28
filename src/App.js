import React, { Component } from 'react';
// import { starPeople } from './StarPeople';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            starPeople: [],
            searchfield: ''
        }

    }

    componentDidMount() {
        fetch('https://swapi.co/api/people/?format=json')
        .then(resp=> {
            return resp.json;
        })
        .then(people => {
            this.setState({ starPeople: people})
        });
        
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

  render() {
    const filteredStar = this.state.starPeople.filter(starPerson => {
        return starPerson.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return(
        <div className='tc'>
            <h1 className='f1'>Star Wars Universe</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList starPeople={filteredStar}/>
        </div>
    );
   
  }
}
  

export default App;