import { Component } from "react";

class Housename extends Component {
  render() {
    let handler = this.props.clickHandler;
    let name = this.props.houseName;
    return (
      <div className="button-class">
        {name.map((hName) => {
          return (
            <button
              className="namebutton"
              onClick={(event) => {
                handler(event);
              }}
            >
              {hName}
            </button>
          );
        })}
      </div>
    );
  }
}

export default Housename;
