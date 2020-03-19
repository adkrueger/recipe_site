import React, { Component } from "react";
import "./component.css";

class Recipe extends Component {
  state = { btnSymbol: "+" };

  handleMinMax = () => {
    const btnSymbol = this.state.btnSymbol === "+" ? "-" : "+";
    this.setState({ btnSymbol });
  };

  render() {
    return (
      <React.Fragment>
        <div className="recipe-border">
          <h1>{this.props.name}</h1>
          <button className="mBtn" onClick={this.handleMinMax}>
            {this.state.btnSymbol}
          </button>
          <ol className="recipe-steps">
            {this.props.steps.map(step => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
        <br />
      </React.Fragment>
    );
  }
}

export default Recipe;
