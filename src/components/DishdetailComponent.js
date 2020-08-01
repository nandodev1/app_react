import React from 'react';
import { Media, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

  function RenderComments({commentsAll}){

      const comments = commentsAll.map((comment) => {
          return(
              <div key={comment.id}>
                <ul className="list-unstyled ml-3 mt-1">
                    <li>--{comment.author}, {Intl.DateTimeFormat('en-US',
                    {
                    year : 'numeric',
                    month: 'short',
                    day: '2-digit'
                    }).format(new Date(Date.parse(comment.date)))}</li>
                    <p><li>{comment.comment}</li></p>
                </ul>
              </div>
        );
      });
      
      return(
          <div className="mt-1">
                <Media>
                    <Media body>
                        <Media heading>Comments</Media>
                        imagine all eatables, living in conFusion!
                        <div  className="row">{comments}</div>
                    </Media>
                </Media>
          </div>
        );
  }

  function RenderDish({dish}){
          return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
          );
  }

    const DishDetail = (props) => {
        
        console.log('Dishdetail Component render invoked');

    if(props.dish != null){
        return(
            <div className="container">
                <div className="row">
                    <RenderDish dish={props.dish} />
                     <div className="col-12 col-md-5 m-1">
                        <RenderComments commentsAll={props.dish.comments} />
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

export default DishDetail;