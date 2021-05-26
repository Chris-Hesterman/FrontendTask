import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import List from './List';

const StyledContainer = styled.div`
  width: 60vw;
  height: 80vh;
  border-radius: 10px;
  border: 1px solid #ddd;
  border-left: 2px solid #dfdfdf;
  border-right: 2px solid #dfdfdf;
  overflow-y: scroll;
  background: #fff;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const StyledInput = styled.input`
  font-family: Raleway, sans-serif;
  outline: none;
  color: #666;
  display: block;
  border: none;
  font-size: 1.4rem;
  font-weight: 300;
  padding: 1.4rem 0 0.7rem 1rem;
  ::placeholder {
    color: #afafaf;
  }
`;

const StyledHr = styled.hr`
  margin: 0 0.75rem;
  border: 1px solid #e6e6e6;
  margin-bottom: 0.75rem;
`;

const App = () => {
  const [studentProfiles, setStudentProfiles] = useState([]);
  const [filter, setFilter] = useState('');

  const fetchData = () => {
    const apiEndpoint = 'https://api.hatchways.io/assessment/students';

    axios.get(apiEndpoint).then((response) => {
      setStudentProfiles(response.data.students);
    });
  };

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StyledContainer data-testid="app-container">
      <StyledInput
        value={filter}
        onChange={handleChange}
        placeholder="Search by name"
      ></StyledInput>
      <StyledHr></StyledHr>
      <List studentProfiles={studentProfiles} />
    </StyledContainer>
  );
};

export default App;
