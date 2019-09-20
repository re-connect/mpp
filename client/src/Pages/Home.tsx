import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import PersonIcon from '@material-ui/icons/Person';
import React, { useCallback, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import superagent, { Response } from 'superagent';

const apiEndpoint = 'http://localhost:8000/api';
const userEndpoint = '/people';

const StyledContent = styled.div`
  padding-top: 200px;
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;
`;

const StyledListItemContent = styled.div`
  background-color: whitesmoke;
  border-radius: 12px;
  padding: 10px;
  flex: 1;
  display: flex;
`;

const Home = withRouter(({ history }: any) => {
  const [people, setPeople] = useState<any[]>([]);
  const fetchPersons = useCallback(() => {
    const token = localStorage.getItem('token');
    if (token !== null) {
      superagent
        .get(`${apiEndpoint}${userEndpoint}`)
        .set('Authorization', `Bearer ${token}`)
        .then((response: Response) => {
          console.log(response);
          setPeople(response.body);
        });
    } else {
      history.push('/login');
    }
  }, [history]);

  useEffect(() => {
    fetchPersons();
  }, [fetchPersons]);

  return (
    <Container maxWidth='sm'>
      <StyledContent>
        <List dense={false}>
          {people.map((person: any) => (
            <ListItem key={person.id} onClick={() => history.push(`/notes/${person.id}`)}>
              <StyledListItemContent>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary={`${person.firstName} ${person.lastName}`} />
              </StyledListItemContent>
            </ListItem>
          ))}
        </List>
      </StyledContent>
    </Container>
  );
});

export default Home;
