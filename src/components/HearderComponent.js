import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalBody, ModalHeader, Button, FormGroup, Form, Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

  constructor(props){
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false
    }

    this.toggleNav = this.toggleNav.bind(this);//vinculando function
    this.toggleModal = this.toggleModal.bind(this);//vinculando function
    this.handleLogin = this.handleLogin.bind(this);//vinculando function
  }

  toggleNav(){
    this.setState({
        isNavOpen : !this.state.isNavOpen
    });
  }

  toggleModal(){
    this.setState({
        isModalOpen : !this.state.isModalOpen
    });
  }

  handleLogin(event){
      this.toggleModal();
      alert("username: " + this.username.value + " password: " + this.userpassword.value + " Remenber: " + this.remember.checked);
      event.preventDefault();
  }

  render() {
    return(
    <React.Fragment>
      <Navbar dark expand="md">
        <div className="container">
            <NavbarToggler onClick={this.toggleNav}/>
            <NavbarBrand className="mr-auto" href="/">
              <img src="assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion" />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg">
                      Home
                    </span> 
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/about">
                    <span className="fa fa-info fa-lg">
                      About
                    </span> 
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lg">
                      Menu
                    </span> 
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contacts">
                    <span className="fa fa-address-card fa-lg">
                      Contacts us
                    </span> 
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav  className="ml-auto" >
                  <NavItem>
                      <Button outline onClick={this.toggleModal}>
                          <span className="fa fa-sign-in fa-lg"></span>
                          Login
                      </Button>
                  </NavItem>
              </Nav>
            </Collapse>
        </div>
      </Navbar>
      <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Ristorante con Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
               </div>
           </div>
       </Jumbotron>
       <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
           <ModalHeader toggle={this.toggleModal}>
               Login
           </ModalHeader>
           <ModalBody>
               <Form onSubmit={this.handleLogin}>
                   <FormGroup >
                       <Label htmlFor="username">Username</Label>
                       <Input type="text" id="username" name="username"
                       innerRef={(input) => this.username = input}/>
                   </FormGroup>
                   <FormGroup onSubmit={this.handleLogin}>
                       <Label htmlFor="userpassword">Password</Label>
                       <Input type="password" id="userpassword" name="userpassword"
                       innerRef={(input) => this.userpassword = input}/>
                   </FormGroup>
                   <FormGroup check>
                       <Label check>
                           <Input type="checkbox" name="remenber"
                                innerRef={(input) => this.remember = input}/>
                           Remenber me 
                       </Label>
                   </FormGroup>
                   <Button type="submit" value="submit" color="primary" >Login</Button>
               </Form>
           </ModalBody>
       </Modal>
    </React.Fragment>
    );
  }
}

export default Header;