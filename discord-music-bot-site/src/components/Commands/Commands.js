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
  const [filter, setFilter] = useState('All');
  const [searchKey, setSearchKey] = useState('');
  const [shownCommands, setShownCommands] = useState(allCommands);
  const changeFilter = (targetFilter) => {
    setFilter(targetFilter);
  };

  const onSearch = (e) => {
    setSearchKey(e.target.value);
  };

  const filterCommands = () => {
    if (filter === 'All') {
      setShownCommands(allCommands);
      return;
    }
    let filteredCmds = allCommands.filter((cmd, idx) => cmd.field === filter);
    setSearchKey('');
    setShownCommands(filteredCmds);
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
        return res;
      })
      .then((res) => {
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
  useEffect(() => {}, [shownCommands]);

  useEffect(() => {
    filterCommands();
  }, [filter]);
  useEffect(() => {
    if (searchKey === '') {
      // filters the commands with the last filter and returns
      filterCommands();
      return;
    }
    let searchedCmds = allCommands.filter((cmd, idx) => {
      if (
        cmd.name.toLowerCase().includes(searchKey) ||
        cmd.description.toLowerCase().includes(searchKey) ||
        cmd.aliases.toLowerCase().includes(searchKey)
      ) {
        return true;
      } else {
        return false;
      }
    });
    setShownCommands(searchedCmds);
  }, [searchKey]);

  return (
    <div className={`${styles.commandscnt}`}>
      <ToastContainer />
      {shownCommands && (
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
              {shownCommands.length !== 0 ? (
                <CommandsList shownCommands={shownCommands} />
              ) : (
                <div
                  className="mx-auto"
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: '24px',
                  }}
                >
                  No commands found!
                </div>
              )}
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Commands;
