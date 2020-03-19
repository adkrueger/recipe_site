import React, { Component } from "react";

class Recipe extends Component {
  state = {};

  render() {
    return (
      <div className="recipe-border">
        <h1>{this.props.name}</h1>
        <ol className="recipe-steps">
          {this.props.steps.map(step => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Recipe;
