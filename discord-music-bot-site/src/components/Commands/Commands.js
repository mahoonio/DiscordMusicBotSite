import styles from './Commands.module.css';
import { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import commandMock from '../../mock/commandMock';
import axios from 'axios';
const Commands = () => {
  const [allCommands, setAllCommands] = useState([]);
  useEffect(() => {
    axios
      .get('https://mylo-website.herokuapp.com/api/commands/', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setAllCommands(res.data);
      })
      .catch((err) => {
        alert(
          'there was a problem connecting to the server. \nif you are in iran,use VPN'
        );
      });
    setAllCommands(commandMock);
    return;
  }, []);
  return (
    <div className={`${styles.commandscnt}`}>
      {commandMock && (
        <Container className="h-100">
          <Row className="h-100">
            <Col>
              <div className={`${styles.filterscnt}`}></div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Commands;
