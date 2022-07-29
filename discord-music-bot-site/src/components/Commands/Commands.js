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
  const [filter, setFilter] = useState('Everyone');
  const [searchKey, setSearchKey] = useState('');
  const [shownCommands, setShownCommands] = useState(allCommands);
  const changeFilter = (targetFilter) => {
    setFilter(targetFilter);
  };

  const onSearch = (e) => {
    setSearchKey(e.target.value);
  };
  useEffect(() => {
    axios
      .get('https://mylo-website.herokuapp.com/api/commands/', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setAllCommands(res.data);
        setShownCommands(res.data);
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
  }, []);

  useEffect(() => {
    let filteredCmds = allCommands.filter((cmd, idx) => cmd.field === filter);
    setSearchKey('');
    setShownCommands(filteredCmds);
  }, [filter]);
  useEffect(() => {
    console.log('search key : ', searchKey);
    if (searchKey === '') setShownCommands(allCommands);
    let searchedCmds = allCommands.filter((cmd, idx) => {});
  }, [searchKey]);

  return (
    <div className={`${styles.commandscnt}`}>
      <ToastContainer />
      {allCommands && (
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
                value={searchKey}
                placeholder="Search..."
                className={`${styles.searchinput} w-100 mb-3`}
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
