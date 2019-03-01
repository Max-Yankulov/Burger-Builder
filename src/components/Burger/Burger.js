import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((ing) => {
      return [...Array(props.ingredients[ing])].map((_, i) => {
        return <BurgerIngredient key={ing + i} type={ing} />;
      });
    })
    .reduce((arr, el) => arr.concat(el), []);
  // Another way of doing it
  // const transformedIgredients = [];
  // for (let ing in props.ingredients) {
  //   for (let i = 1; i <= props.ingredients[ing]; i++) {
  //     transformedIgredients.push(<BurgerIngredient key={ing + i} type={ing} />);
  //   }
  // }
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type={'bread-top'} />
      {transformedIngredients}
      <BurgerIngredient type={'bread-bottom'} />
    </div>
  );
};

export default burger;
