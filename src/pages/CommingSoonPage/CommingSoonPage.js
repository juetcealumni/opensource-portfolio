import React from 'react';
import { Row, Col,Container } from 'react-bootstrap';
import { CommingSoonCard } from '../../components';
import { WelcomeSection } from './styles';


class CommingSoonPage extends React.Component {



    render() {

        return (
            <div>
                <Container>
                <Row className="justify-content-md-center">
                    <Col>
                        <WelcomeSection>
                            <div className="maincard">
                                <CommingSoonCard/>
                            </div>
                        </WelcomeSection>
                    </Col>
                </Row>
                </Container>
            </div>
        );
    }
}


export default CommingSoonPage;
