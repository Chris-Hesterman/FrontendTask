import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import List from './List';

const StyledContainer = styled.div`
  width: 60vw;
  height: 80vh;
  border-radius: 10px;
  border: 1px solid #ddd;
  border-left: 2px solid #ddd;
  border-right: 2px solid #ddd;
  overflow-y: scroll;
  background: #fff;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const App = () => {
  const [studentProfiles, setStudentProfiles] = useState([]);

  const fetchData = () => {
    const apiEndpoint = 'https://api.hatchways.io/assessment/students';

    axios.get(apiEndpoint).then((response) => {
      setStudentProfiles(response.data.students);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StyledContainer data-testid="app-container">
      <List studentProfiles={studentProfiles} />
    </StyledContainer>
  );
};

export default App;
