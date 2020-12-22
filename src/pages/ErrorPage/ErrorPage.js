import React from 'react';
import { Row, Col,Container } from 'react-bootstrap';
import { ErrorPageCard } from '../../components';
import { WelcomeSection } from './styles';


class ErrorPage extends React.Component {



    render() {

        return (
            <div>
                <Container>
                <Row className="justify-content-md-center">
                    <Col>
                        <WelcomeSection>
                            <div className="maincard">
                                <ErrorPageCard/>
                            </div>
                        </WelcomeSection>
                    </Col>
                </Row>
                </Container>
            </div>
        );
    }
}


export default ErrorPage;
