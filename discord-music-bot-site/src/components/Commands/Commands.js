import styles from './Commands.module.css';
import { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import commandMock from '../../mock/commandMock';
import axios from 'axios';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Filter from './Filter';
import CommandsList from './CommandsList';
const Commands = () => {
  const [allCommands, setAllCommands] = useState([]);
  const [filter, setFilter] = useState('everyone');
  const [searchKey, setSearchKey] = useState('');
  const [shownCommands, setShownCommands] = useState(allCommands);
  const changeFilter = (targetFilter) => {
    setFilter(targetFilter);
  };

  const onSearch = (e) => {};
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
        toast.error(
          'there was a problem connecting to the server.if you have internet restrictions please use VPN',
          {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      });
    setAllCommands(commandMock);
  }, []);
  useEffect(() => {}, [filter]);
  useEffect(() => {}, [searchKey]);
  return (
    <div className={`${styles.commandscnt}`}>
      <ToastContainer />
      {commandMock && (
        <Container className="h-100">
          <Row className="h-100">
            <Col xs={12} md={3}>
              <Filter
                filter={filter}
                setFilter={setFilter}
                changeFilter={changeFilter}
              />
            </Col>
            <Col>
              <input
                placeholder="Search..."
                className={`${styles.searchinput} w-100`}
                onChange={onSearch}
              />
              <CommandsList shownCommands={shownCommands} />
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Commands;
