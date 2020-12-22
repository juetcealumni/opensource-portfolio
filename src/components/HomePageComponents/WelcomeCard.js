import React from 'react';
import { Card} from 'react-bootstrap';
import uploadpic from '../../assets/svg/welcome.svg';



function WelcomeCard() {
    return (
        <Card className="text-center">
            <Card.Header>We believe that Empowerment of individuals is a key part of what makes open source work to foster innovations.</Card.Header>
            <Card.Img variant="top" src={uploadpic} height="420"/>
            <Card.Body>
                <Card.Title>OpenSource Contribution Help Us to Grow </Card.Title>
                <Card.Text>
                 Explore our new initiative to showcase the projects of students of Department of Electronics and Telecommunication Engineering of Jadavpur University
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">See our Projects</Card.Footer>
        </Card>

    );
}

export default WelcomeCard;