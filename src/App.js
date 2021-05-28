import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import List from './List';

const App = () => {
  const [studentProfiles, setStudentProfiles] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [tagFilter, setTagFilter] = useState('');
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    const apiEndpoint = 'https://api.hatchways.io/assessment/students';
    try {
      const response = await axios.get(apiEndpoint);
      setStudentProfiles(response.data.students);
    } catch {
      console.log('There was a problem');
      setIsError(true);
    }
  };

  const addTag = (tagName, student, studentProfileIndex) => {
    let newProfiles = [...studentProfiles];

    if (!!student.tags) {
      student.tags = [...student.tags, tagName];
    } else {
      student.tags = [tagName];
    }

    newProfiles[studentProfileIndex] = student;
    setStudentProfiles(newProfiles);
  };

  const filterProfiles = useCallback(() => {
    let filtered = [];

    if (nameFilter.length > 1 || tagFilter.length > 0) {
      filtered = studentProfiles.filter((student) => {
        const allTags = student.tags ? student.tags.join(' ') : '';
        const fullName = `${student.firstName} ${student.lastName}`;

        return (
          allTags.toLowerCase().includes(tagFilter.toLowerCase()) &&
          fullName.toLowerCase().includes(nameFilter.toLowerCase())
        );
      });
    }

    setFilteredProfiles(filtered);
  }, [nameFilter, tagFilter, studentProfiles]);

  const handleChange = (e) => {
    if (e.target.name === 'name') {
      setNameFilter(e.target.value);
    } else {
      setTagFilter(e.target.value);
    }
  };

  useEffect(() => {
    filterProfiles();
  }, [nameFilter, tagFilter, filterProfiles]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StyledContainer data-testid="app-container">
      <StyledInputContainer>
        <StyledNameInput
          type="text"
          name="name"
          value={nameFilter}
          onChange={handleChange}
          placeholder="Search by name"
        ></StyledNameInput>
        <StyledTagInput
          type="text"
          name="tag"
          value={tagFilter}
          onChange={handleChange}
          placeholder="Search by tag"
        ></StyledTagInput>
      </StyledInputContainer>
      {isError ? (
        <h1>There was a problem, please refresh and try again</h1>
      ) : (
        <List
          studentProfiles={
            tagFilter.length || nameFilter.length > 1
              ? filteredProfiles
              : studentProfiles
          }
          addTag={addTag}
        />
      )}
    </StyledContainer>
  );
};

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

const StyledInputContainer = styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 100;
`;

const StyledNameInput = styled.input`
  border: none;
  border-bottom: 2px solid #ddd;
  color: black;
  display: block;
  font-size: 1.4rem;
  font-weight: 400;
  font-family: Raleway, sans-serif;
  margin: 0 auto 0 auto;
  padding: 1.4rem 0 0.75rem 0.4rem;
  outline: none;
  width: 97%;
  ::placeholder {
    color: #888;
  }
  :focus {
    border-bottom: 2px solid #757575;
  }
`;

const StyledTagInput = styled(StyledNameInput)`
  margin-bottom: 0.75rem;
  padding-top: 1.8rem;
`;

export default App;
