import React, { Component } from "react";
import Recipe from "./recipe";

class Recipes extends Component {
  state = {};
  render() {
    const { recipes } = this.props;

    return (
      <div className="allRecipes">
        {recipes.map(recipe => (
          <Recipe
            name={recipe.name}
            ingredients={recipe.ingredients}
            steps={recipe.steps}
          />
        ))}
      </div>
    );
  }
}

export default Recipes;
