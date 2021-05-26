import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import List from './List';

const StyledContainer = styled.div`
  background: #fff;
  border-radius: 10px;
  border: 1px solid #ddd;
  border-left: 2px solid #dfdfdf;
  border-right: 2px solid #dfdfdf;
  height: 80vh;
  overflow-y: scroll;
  width: 60vw;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: 2px solid #eaeaea;
  color: #666;
  display: block;
  font-size: 1.4rem;
  font-weight: 300;
  font-family: Raleway, sans-serif;
  margin: 0 auto 0.7rem auto;
  padding: 1.4rem 0 0.75rem 0.4rem;
  position: sticky;
  position: -webkit-sticky;
  outline: none;
  top: 0;
  width: 97%;
  z-index: 100;
  ::placeholder {
    color: #afafaf;
  }
  :focus {
    border-bottom: 2px solid #757575;
  }
`;

const App = () => {
  const [studentProfiles, setStudentProfiles] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [filteredProfiles, setFilteredProfiles] = useState([]);

  const fetchData = () => {
    const apiEndpoint = 'https://api.hatchways.io/assessment/students';

    axios.get(apiEndpoint).then((response) => {
      setStudentProfiles(response.data.students);
    });
  };

  const handleChange = (e) => {
    setNameFilter(e.target.value);
  };

  useEffect(() => {
    let filtered = [];

    if (nameFilter.length > 1) {
      filtered = studentProfiles.filter((student) => {
        const fullName = `${student.firstName} ${student.lastName}`;

        return fullName.toLowerCase().includes(nameFilter.toLowerCase());
      });
    }
    filtered = filtered.length > 0 ? filtered : [];
    setFilteredProfiles(filtered);
  }, [nameFilter, studentProfiles]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StyledContainer data-testid="app-container">
      <StyledInput
        type="text"
        value={nameFilter}
        onChange={handleChange}
        placeholder="Search by name"
      ></StyledInput>
      <List
        studentProfiles={
          nameFilter.length > 1 ? filteredProfiles : studentProfiles
        }
      />
    </StyledContainer>
  );
};

export default App;
