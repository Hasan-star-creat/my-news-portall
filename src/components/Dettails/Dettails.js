import React from 'react';
import { Button, Card, Title } from 'react-bootstrap';

const Dettails = (props) => {
    const {title,urlToImage, author, description} = props.articles;
    return (
        <div>
             <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={urlToImage} />
            <Card.Body>
                <Card.Title> {title}</Card.Title>
                <Card.Text> {description}  </Card.Text>
                <Card.Text className="fst-italic text-primary">Author: {author}  </Card.Text>
                <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>  
        </div>
    );
};

export default Dettails;