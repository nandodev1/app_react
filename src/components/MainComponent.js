
import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent'
import { DISHES } from '../shared/dishes'

class Main extends Component {

  constructor(props){
    console.log('Main component constructor invoked.')
    super(props);
    this.state = {
      dishes: DISHES,
      selectDish: null
    };
  }

  onDishSelect(dishId){
      this.setState({selectDish: dishId});
  }
  
  render(){
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristaurant Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}
        onClick={(dishId) => this.onDishSelect(dishId)}/>
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectDish)[0]} />
      </div>
    );
  }
}

export default Main;
