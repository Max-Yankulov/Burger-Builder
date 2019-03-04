import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.6,
  bacon: 0.5,
  cheese: 0.8,
  meat: 0.9
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 2,
    purchasable: false,
    purchasing: false
  };

  updatePurchaseState(ingredients) {
    const sum = Object.values(ingredients).reduce((acc, el) => acc + el);

    this.setState({ purchasable: sum > 0 });
  }

  updateIngredientHandler = (type, operation, e) => {
    let ingredients = { ...this.state.ingredients };
    let totalPrice = this.state.totalPrice;

    if (operation === 'add') {
      ingredients[type] += 1;
      totalPrice += INGREDIENT_PRICES[type];
    } else if (operation === 'remove' && ingredients[type] > 0) {
      ingredients[type] -= 1;
      totalPrice -= INGREDIENT_PRICES[type];
    }

    this.setState({ ingredients, totalPrice });

    this.updatePurchaseState(ingredients);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    alert('You continue!');
  };

  render() {
    return (
      <React.Fragment>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          updateIngredientHandler={this.updateIngredientHandler}
          ingredients={this.state.ingredients}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          purchased={this.purchaseHandler}
        />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
