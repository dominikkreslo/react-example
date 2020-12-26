import React from 'react';
import ReactDOM from 'react-dom';


<RecipeTitle />
class RecipeTitle extends React.Component {
  render() {
    const title = 'Mashed Potatoes';
    return (
      <h2>{ title }</h2>
    )
  }
}

ReactDOM.render(
  <article>
    <h1>Recipe Manager</h1>
    <RecipeTitle />
  </article>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

