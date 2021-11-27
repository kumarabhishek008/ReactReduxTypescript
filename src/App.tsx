import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import { Provider } from 'react-redux';
import {store} from './Store';
import AppContainer from './containers/App';

function App() {

  return (
    <Provider store={store}> 
      <AppContainer/>
    </Provider>
  );
}

export default App;
