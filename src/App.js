import React,{Component} from 'react';
import {BrowserRouter,Link, Route, Switch} from 'react-router-dom';
import Login from './Components/Login';
import Pedidos from './Components/Pedidos'
import Cocina from './Components/Cocina'



class App extends Component {
    render(){
      return(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact/>
        <Route path="/pedidos" component={Pedidos}/>
        <Route path="/cocina" component={Cocina}/>
      </Switch>
      </BrowserRouter>
    );
    }
  
  };
  
  export default App;
