// import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchString: "",
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(() => {
        return {monsters: users}
      }))
  }

  onSearchChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {searchString};
    })
  }

  render() {
    const {monsters, searchString} = this.state;
    const {onSearchChange} = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchString);
    })

    return (
      <div className="App">
        <SearchBox 
          className='search-box' 
          placeholder='search monsters' 
          onChangeHandler={onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
