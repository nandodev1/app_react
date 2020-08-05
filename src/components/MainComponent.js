
import React, { Component } from 'react';
import Home from './HomeComponent';
import About from './AboutComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import Hearder from './HearderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent'
import { DISHES } from '../shared/dishes'
import { COMMENTS } from '../shared/comments'
import { LEADERS } from '../shared/leaders'
import { PROMOTIONS } from '../shared/promotions'
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,
      comments : COMMENTS,
      promotions : PROMOTIONS,
      leaders : LEADERS
    };
  }
  

  DishWithId = ({match}) => {
    return(
      <DishDetail dish={this.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
      comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}/>
    );
  }

  render(){
      
    const HomePage = () => {
      return(
        <Home 
          dish={this.state.dishes.filter ((dish) => dish.featured)[0]}
          promotions={this.state.promotions.filter ((promotions) => promotions.featured)[0]}
          leaders={this.state.leaders.filter ((leaders) => leaders.featured)[0]}
          />
      );
    }

    const AboutPage = () => {
      return(
         <About leaders={this.state.leaders} />
      );
     
    }

    return (
      <div>
        <Hearder/>
          <Switch>
            <Route path="/home" component={ HomePage } />
            <Route path="/about" component={ AboutPage } />
            <Route exact path="/menu" component={ () => <Menu dishes={this.state.dishes}/>} />
            <Route path="/menu/:dish" component={this.DishWithId} />
            <Route exact path="/contacts" component={Contact} />
            <Redirect to="/home" />
          </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;
