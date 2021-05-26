import { useState, useEffect } from 'react';
import axios from 'axios';
import List from './List';

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
    <div data-testid="app-container">
      <List studentProfiles={studentProfiles} />
    </div>
  );
};

export default App;
