import React from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBar } from "./components/searchBar/searchBar.component";
import './components/card-list/card-list.style.css';
import './App.css';
import './index.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchBar: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }
  render() {
    const { monsters, searchBar } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchBar.toLocaleLowerCase()));
    return (
      <div className="App" >
        <h1>Monsters Rolodex</h1>
        <SearchBar placeholder="search monsters.."
          handleChange={e => { this.setState({ searchBar: e.target.value }, () => console.log(this.state)) }} />
        <CardList monsters={filteredMonsters} />
      </div >
    )
  }

}

export default App;
