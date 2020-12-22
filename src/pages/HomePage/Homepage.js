import React from 'react';
import { Row, Col} from 'react-bootstrap';
import { WelcomeCard,ProjectCard,ContributeCard } from '../../components';
import { WelcomeSection } from './styles';


class HomePage extends React.Component {



    render() {

        return (
            <div>
                <Row className="justify-content-md-center">
                    <Col>
                        <WelcomeSection>
                            <div className="maincard">
                                <WelcomeCard />
                            </div>
                        </WelcomeSection>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col>
                        <WelcomeSection>
                            <div className="maincard">
                                <ProjectCard/>
                            </div>
                        </WelcomeSection>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col>
                        <WelcomeSection>
                            <div className="maincard">
                                <ContributeCard/>
                            </div>
                        </WelcomeSection>
                    </Col>
                </Row>

            </div>
        );
    }
}


export default HomePage;
