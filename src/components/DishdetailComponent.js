import React, { Component } from 'react';
import { Media, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component{

    constructor(props){
        super(props);
    }

  renderComments(commentsAll){
      const comments = commentsAll.map((comment) => {
          return(
              <div key={comment.id}>
                <ul class="list-unstyled ml-3">
                    <div className="mt-1">
                        <li>--{comment.author}, {Intl.DateTimeFormat('en-US',
                        {
                        year : 'numeric',
                        month: 'short',
                        day: '2-digit'
                        }).format(new Date(Date.parse(comment.date)))}</li>
                        <li>{comment.comment}</li>
                    </div>
                </ul>
              </div>
        );
      });
      
      return(
          <div>
              <Media>
                <Media body>
                    <Media heading>Comments</Media>
                    imagine all eatables, living in conFusion!
                <div  className="row">
                    {comments}
                </div>
                </Media>
                </Media>
          </div>
        );
  }

  renderDish(){
      let dish = this.props.dish;
      if(dish != null){
          return(
            <div className="col-xs-12 col-sm-12 col-md-12 m-1">       
                    <div class="container">
                    <div class="row">
                        <div class="col-sm">    
                            <Card>
                                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div class="col-sm">
                            {this.renderComments(dish.comments)}
                        </div>
                    </div>
                </div>
            </div>
          );
      }else{
          return(
          <div>

          </div>);
      }
  }

    render(){
        return(
        <div>
            {this.renderDish()}
        </div>
        );
    }
}

export default DishDetail;