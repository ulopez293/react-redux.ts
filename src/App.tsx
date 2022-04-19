import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import { loadAction } from './redux/actions/actions';

import SplashScreen from './components/SplashScreen';
import Login from './components/Login';

function App() {

  useEffect(() => {
    setTimeout(() => { loadAction(true)(store.dispatch) }, 3500); // optional timing after which to load
  }, []);


  return (
    <Provider store={store}>
      <SplashScreen />
      <Login />
    </Provider>
  );
}

export default App;
