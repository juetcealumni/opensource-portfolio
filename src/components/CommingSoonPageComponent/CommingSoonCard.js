import React from 'react';
import { Card, Button } from 'react-bootstrap';
import comingsoon from '../../assets/svg/comingsoon.svg';



function CommingSoonCard() {
    return (
        <Card className="text-center">
            <Card.Header>Sorry this page is not cooked yet</Card.Header>
            <Card.Text>{'       '}</Card.Text>
            <Card.Img variant="top" src={comingsoon} height="300"/>
            <Card.Body>
                <Card.Title>Our developers are cooking the page for you</Card.Title>
                <Card.Text>
                    Developers are Chefs to us. Any fool can write code that a computer can understand.Good programmers write code that humans can understand.
                </Card.Text>
                <a href="/"><Button variant="primary">Back to Home</Button></a>
            </Card.Body>

        </Card>

    );
}

export default CommingSoonCard;