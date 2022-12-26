import Header from "./Header";
import "./App.css";
import Housename from "./Housename";
import { got } from "./data_2";
import Displaycharacter from "./Displaycharacter";
import { Component } from "react";

let houseName = [];
let allCharcter = [];

got.houses.map((hName) => {
  houseName.push(hName.name);

  hName.people.map((peopel) => {
    allCharcter.push(peopel);
  });
});

let charcterDetails = got.houses.reduce((acc, cur) => {
  acc[cur.name] = {};
  acc[cur.name]["people"] = cur.people;
  return acc;
}, {});

class App extends Component {
  constructor() {
    super();
    this.state = {
      gotcharacter: allCharcter,
    };
  }

  inputHandle = (event) => {
    event.preventDefault();
    let list = allCharcter.filter((character) => {
      let names = character.name.toLowerCase();
      if (character.name.toLowerCase().includes(event.target.value)) {
        return character;
      }
    });
    this.setState({
      gotcharacter: list,
    });
  };

  clickHandler = (event) => {
    this.setState({
      gotcharacter: charcterDetails[event.target.innerText].people,
    });
  };

  render() {
    let charDetailes = this.state.gotcharacter;
    return (
      <div className="App">
        <Header inputhandler={this.inputHandle} />
        <Housename clickHandler={this.clickHandler} houseName={houseName} />
        <div className="character-div">
          {charDetailes.map((character) => {
            return (
              <Displaycharacter
                name={character.name}
                image={character.image}
                discription={character.description}
                link={character.wikiLink}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
