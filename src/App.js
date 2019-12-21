import React from 'react';
import './App.css';
import Body from './Component/Body';
import Banner from './Component/Banner';
import CardList from './Component/CardList';
import Details from './Component/Details';
import Footer from './Component/Footer';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';

function App() {
  return (
   <div>
   <BrowserRouter>
     <Switch>
     <Route exact path = "/" component ={Body}/>
      <Route path = '/banner' component = {Banner}/>
     
     <Route path = '/gallery' component ={CardList}/>
     <Route path = '/details' component ={Details}/>
     </Switch>
     <Footer/>
     </BrowserRouter>
   </div>
  );
}

export default App;
