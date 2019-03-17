import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: false
    };

    resInterceptor = axios.interceptors.response.use(
      (res) => res,
      (error) => {
        this.setState({ error: error.message });
      }
    );

    reqInterceptor = axios.interceptors.request.use(
      (req) => req,
      (error) => {
        this.setState({ error: error.message });
      }
    );

    componentWillUnmount() {
      axios.interceptors.response.eject(this.resInterceptor);
      axios.interceptors.request.eject(this.reqInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <React.Fragment>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </React.Fragment>
      );
    }
  };
};

export default withErrorHandler;
