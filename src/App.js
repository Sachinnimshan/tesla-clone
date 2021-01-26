import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import HomeScreen from './components/Home/HomeScreen';
import Menu from './components/Header/Menu';

function App() {

  const [sidebar, setsidebar] = useState(false);
  return (
    <div className='app-container'>
      <Router>
      <Header sidebar={sidebar} setsidebar={setsidebar}/>
      {sidebar && <Menu/>}
        <Switch>
          <Route exact path='/' component={HomeScreen}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
