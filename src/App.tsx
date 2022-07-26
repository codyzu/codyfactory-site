import {Container, Row, Col} from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row className="vh-100 overflow-hidden">
        <Col className="align-self-center">
          <h1>Not much to see here.</h1>
          <h1>
            You probably meant to go to{' '}
            <a href="https://devrel.codyfactory.eu">devrel.codyfactory.eu</a>
          </h1>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
