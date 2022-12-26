import { Component } from "react";

class Displaycharacter extends Component {
  render() {
    let { name, image, discription, link } = this.props;
    return (
      <div className="char-div" id={name}>
        <img className="char-img" src={image} />
        <h3>{name}</h3>
        <p>{discription}</p>
        <button className="charbtn" href={link}>KNOW MORE!</button>
      </div>
    );
  }
}

export default Displaycharacter;
