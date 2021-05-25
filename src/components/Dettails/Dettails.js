import React from 'react';
import { Button, Card, Row, Container, Col } from 'react-bootstrap';


const Dettails = (props) => {
    const {title,urlToImage, author, description} = props.articles;
    return (
        <div>
        <div class="container">
        <Card style={{ width:'50rem' }}>
        <div class="row">
            <div class="col-6 col-sm-8  col-md-11"><Card.Img height="200px" variant="top" src={urlToImage} /></div>
        </div>
        <Card.Body>
        <div class="row">
            <div class="col-6 col-sm-8 col-md-11 col-lg-12"><Card.Title> {title}</Card.Title></div>
        </div>
        <div class="row">
            <div class="col-6 col-sm-8 col-md-11"><Card.Text> {description} </Card.Text></div>
        </div>
        <div class="row">
            <div class="col-6 col-sm-8 col-md-12"><Card.Text className="fst-italic text-primary">Author: {author}  </Card.Text></div>
        </div>
        <div class="row">
            <div class="col-6 col-sm-8 col-md-11"><Button variant="primary">Go somewhere</Button></div>
        </div>
  </Card.Body>
  </Card>  
  </div>

        </div>
    );
};

export default Dettails;