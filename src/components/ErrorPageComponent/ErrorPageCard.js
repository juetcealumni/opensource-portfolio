import React from 'react';
import { Card, Button } from 'react-bootstrap';
import error404 from '../../assets/svg/error404.svg';



function ErrorPageCard() {
    return (
        <Card className="text-center">
            <Card.Header>Error 404</Card.Header>
            <Card.Text>{'       '}</Card.Text>
            <Card.Text>{'       '}</Card.Text>
            <Card.Img variant="top" src={error404} height="300"/>
            <Card.Body>
                <Card.Title>Our developers may have not built the page yet</Card.Title>
                <Card.Text>
                    Developers are Chefs to us. Any fool can write code that a computer can understand.Good programmers write code that humans can understand.
                </Card.Text>
                <Button variant="primary">Back to Home</Button>
            </Card.Body>

        </Card>

    );
}

export default ErrorPageCard;