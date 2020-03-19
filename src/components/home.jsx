import React, { Component } from "react";
import Recipes from "./recipes";

class Home extends Component {
  state = {
    recipes: [
      {
        name: "chicken",
        ingredients: ["salt", "chicken", "pepper"],
        steps: ["chicken in pan", "pan on stove", "cook chicky", "enjoy"]
      },
      {
        name: "tofu",
        ingredients: ["tofu", "soy sauce", "love"],
        steps: [
          "take tofu out of package and press it",
          "marinate tofu in soy sauce for 2 hours",
          "cook tofu",
          "enjoy"
        ]
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <Recipes recipes={this.state.recipes} />
      </React.Fragment>
    );
  }
}

export default Home;
