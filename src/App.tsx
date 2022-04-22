import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Provider } from 'react-redux';
import { store, Persistor } from './redux/store/store';
import { loadAction } from './redux/actions/actions';
import { PersistGate } from 'redux-persist/integration/react'

import Theme from './Theme';
import SplashScreen from './components/SplashScreen';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  let [login, setLogin] = useState(store.getState().login.active)
  store.subscribe(() => {
    let status = store.getState().login.active
    if (status) setLogin(status)
  })

  useEffect(() => {
    setTimeout(() => { loadAction(true)(store.dispatch) }, 3500); // optional timing after which to load
  }, []);


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={Persistor}>
        <BrowserRouter>
          <SplashScreen />
          <Theme>
            <Routes>
              {login ? <Route path="/" element={<Home />} /> : <Route path="/" element={<Login />} />}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Theme>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
