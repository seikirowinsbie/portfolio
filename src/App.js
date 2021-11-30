import React from 'react';
import './App.scss';
import Router from './Router';
import NavBar from './components/layouts/NavBar';
import './design/Colors.scss';
class App extends React.Component
{
    
    render()
    {
      return (
         <>
          <NavBar />

          <Router />
         </>
      )
    }
}

export default App;
