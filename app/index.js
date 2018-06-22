import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import { store } from './store';
import Ascreen from './containers/Ascreen';
import Bscreen from './containers/Bscreen';
import Cscreen from './containers/Cscreen';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="navigation" hideNavBar={false}>
            <Scene key="ascreen" component={Ascreen} />
            <Scene key="bscreen" component={Bscreen} />
            <Scene key="cscreen" component={Cscreen} />
          </Scene>
        </Router>
      </Provider>
    );
  }
}

export default App;
