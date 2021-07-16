import { Component } from "react";
import CardItem from "./components/card-item/card-item.component";
import SearchInput from "./components/search-input/search-input.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      input: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ monsters: data }))
      .catch((err) => console.log(err));
  }
component 
  onInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    const { monsters, input } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(input.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchInput
          inputChange={this.onInputChange}
          placeholder="Search monsters"
        />
        <CardItem monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
