import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  const transformedIgredients = Object.keys(props.ingredients).map((ing) => {
    return [...Array(props.ingredients[ing])].map((_, i) => {
      return <BurgerIngredient key={ing + i} type={ing} />;
    });
  });
  // Another way of doing it
  // const transformedIgredients = [];
  // for (let ing in props.ingredients) {
  //   for (let i = 1; i <= props.ingredients[ing]; i++) {
  //     transformedIgredients.push(<BurgerIngredient key={ing + i} type={ing} />);
  //   }
  // }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type={'bread-top'} />
      {transformedIgredients}
      <BurgerIngredient type={'bread-bottom'} />
    </div>
  );
};

export default burger;
