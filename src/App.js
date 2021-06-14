import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import Home from '../src/container/Home';
import UserProvider from './component/providers/UserProvider';


function App() {


    return (
      <UserProvider>
      <Home />
    </UserProvider>
      );
}

export default App;
