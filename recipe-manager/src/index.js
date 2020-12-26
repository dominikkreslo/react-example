import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class IngredientsList extends React.Component {
  render() {
    const ingredients = [
      '3 potatoes, cut into 1/2 pieces',
      '4 Tbsp butter',
      '1/8 cup heavy cream',
      'Salt',
      'Pepper'
    ];

    const ingredientListItems = ingredients.map((ingredient, index) => {
      return (
        <li key={index}>{ ingredient }</li>
      );
    });

    return (
      <ul>
        { ingredientListItems }
      </ul>
    );
  }
}

class RecipeSteps extends React.Component {
  render() {
    const steps = [
      'Add cut potatoes to a pot of heavily salted water',
      'Bring pot to a boil',
      'Boil the potatoes until fork tender, about 15-20 minutes',
      'Strain the potatoes',
      'Return potatoes to pot',
      'Add butter, cream, salt and pepper to taste',
      'Mash potatoes',
      'Reseason and add butter and cream as desired'
    ];

    const stepsListItems = steps.map((step, index) => {
      return (
        <li key={index}>{ step }</li>
      );
    });
    return (
      <ol>
        { stepsListItems }
      </ol>
    )
  }
}

class RecipeTitle extends React.Component {
  render() {
      const title = 'Mashed potatoes';
      return (
          <h2>{ title }</h2>
      )
  }
}

ReactDOM.render(
  <article>
      <h1>Recipe Manager</h1>
      <RecipeTitle />
      <IngredientsList />
      <RecipeSteps />
  </article>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

