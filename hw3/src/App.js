import React from "react";
import Card from "./Card";
import "./styles.css";

const color = ["red", "blue", "green", "purple", "pink"];

const _shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // shuffle state
      decks: [],
    };
  }

  shuffle = ([...arr]) => {
    const colorSet = [...arr, ...arr];
    return _shuffle(colorSet);
  };

  handleShuffle = () => {
    console.log(this.shuffle(color));
    this.setState({ decks: this.shuffle(color) });
  };

  render() {
    return (
      <div>
        <div className="card-wrap">
          {this.state.decks.map((c) => (
            <Card background={c} />
          ))}
        </div>
        <div className="text-center">
          <button onClick={this.handleShuffle}>new deck</button>
        </div>
      </div>
    );
  }
}
