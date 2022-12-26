import { Component } from "react";
class Header extends Component {
  render() {
    let handler = this.props.inputhandler;
    return (
      <>
        <header className="header-div">
          <div>People of GOT 👑</div>
          <input
            placeholder="Search the people of GOT"
            className="input-search"
            onKeyUp={(event) => handler(event)}
          ></input>
        </header>
      </>
    );
  }
}

export default Header;
