import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  state = {
    show: true
  };

// componentDidMount(){
//   setTimeout(() => {
//     this.setState({show: false});
//   }, 5000);
// }
// Method for checking if componentWillUnmount will be called in withErrorHandler.js
// remove interceptors we don't need anymore
  render() {
    return (
      <div>
        <Layout>
          {this.state.show ? <BurgerBuilder /> : null }
        </Layout>
      </div>
    );
  }
}

export default App;
