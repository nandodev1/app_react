
import React, { Component } from 'react';
import Home from './HomeComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import Hearder from './HearderComponent';
import Footer from './FooterComponent';
import DishDetail from './DishdetailComponent'
import { DISHES } from '../shared/dishes'
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props){
    console.log('Main component constructor invoked.')
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }
  


  render(){
      
    const HomePage = () => {
      return(
        <Home />
      );
    }

    return (
      <div>
        <Hearder/>
          <Switch>
            <Route path="/home" component={ HomePage } />
            <Route exact path="/menu" component={ () => <Menu dishes={this.state.dishes}/>} />
            <Redirect to="/home" />
          </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;
