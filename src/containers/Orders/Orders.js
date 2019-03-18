import React, { Component } from 'react';

import axios from '../../axios-orders';

import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  };

  componentDidMount() {
    axios
      .get('/orders.json')
      .then((res) => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({ id: key, ...res.data[key] });
        }
        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }

  render() {
    let orders = this.state.loading ? (
      <Spinner />
    ) : (
      this.state.orders.map((order) => (
        <Order
          ingredients={order.ingredients}
          price={order.price}
          key={order.id}
        />
      ))
    );

    return <div>{orders}</div>;
  }
}

export default withErrorHandler(Orders, axios);
