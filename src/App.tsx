import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
      <BrowserRouter>
        <SplashScreen />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="expenses" element={<Login />} />
          <Route path="invoices" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
