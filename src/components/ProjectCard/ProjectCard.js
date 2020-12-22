import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import axios from "axios";
import { ProjectCardSection } from './styles';
import coder1 from '../../assets/repo-image/coder-1.svg';
import coder2 from '../../assets/repo-image/coder-2.svg';
import coder3 from '../../assets/repo-image/coder-3.svg';
import coder4 from '../../assets/repo-image/coder-4.svg';
import coder5 from '../../assets/repo-image/coder-5.svg';
import coder6 from '../../assets/repo-image/coder-6.svg';
import coder7 from '../../assets/repo-image/coder-7.svg';
import coder8 from '../../assets/repo-image/coder-8.svg';
import coder9 from '../../assets/repo-image/coder-9.svg';
import coder10 from '../../assets/repo-image/coder-10.svg';
import coder11 from '../../assets/repo-image/coder-11.svg';
import coder12 from '../../assets/repo-image/coder-12.svg';
import coder13 from '../../assets/repo-image/coder-13.svg';
import coder14 from '../../assets/repo-image/coder-14.svg';
import coder15 from '../../assets/repo-image/coder-15.svg';


import fork from '../../assets/images/fork.svg';
// import license from '../../assets/images/license.svg';
import star from '../../assets/images/star.svg';




function ProjectCard() {
    const [repos, setRepos] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(
                "https://api.github.com/orgs/juetcefreshers/repos"
            )
            .then(({ data }) => {
                setRepos(data);
                setLoading(false);
            });
    }, []);

    let RepoImages = [coder1, coder2, coder3, coder4, coder5, coder6, coder7, coder8, coder9, coder10, coder11, coder12, coder13, coder14, coder15];

    function getRandomRepoImage() {
        let randomNo = Math.floor(Math.random() * 14) + 0; // get no from 0 to 14
        let imagePath = RepoImages[randomNo];
        return imagePath;
    }

    // function getRepoReadmeUrl(repourl){
    //     let ReadmeUrl = repourl+'/blob/main/README.md';
    //     return ReadmeUrl;

    // }



    if (isLoading === false) {
        return (
            <ProjectCardSection>
                <Row>
                    {repos.map((item, key) => (
                        <Col xs={12} md={3} key={key}>
                            <Card className="card">
                                <Card.Img variant="top" src={getRandomRepoImage()} />
                                <Card.Body>

                                    <Card.Title>{item.name}</Card.Title>
                                    <Row>
                                        <Card.Text>
                                            {item.language || 'None'}
                                        </Card.Text>
                                    </Row>
                                    <Row>
                                        <img src={fork} alt="github" className="icons" />{item.forks}
                                        <img src={star} alt="github" className="icons" />{item.stargazers_count}
                                    </Row>
                                    {/* <Card.Text>
                                        {item.description}'
                                    </Card.Text> */}

                                    <Button variant="outline-primary" href={item.html_url} className="card-button">
                                        View Project
                                    </Button>

                                    {/* <Button variant="primary" className="card-button" href={getRepoReadmeUrl(item.html_url)}>
                                        About Project
                                    </Button> */}
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated at {item.updated_at}</small>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </ProjectCardSection>
        );

    }
    else {

    }
    return (
        <div>Loading</div>
    )
}

export default ProjectCard;