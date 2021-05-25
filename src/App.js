import { useState, useEffect } from 'react';
import axios from 'axios';

const App = (props) => {
  const [studentProfiles, setStudentProfiles] = useState([]);

  const fetchData = () => {
    const apiEndpoint = 'https://api.hatchways.io/assessment/students';

    axios.get(apiEndpoint).then((response) => {
      setStudentProfiles(response.data.students);
    });
  };

  const calcAverage = (student) => {
    const total = student.grades.reduce((acc, grade) => {
      acc = acc + Number(grade);
      return acc;
    }, 0);

    return total / student.grades.length;
  };

  const students = studentProfiles.map((student) => {
    return (
      <div key={student.firstName + student.lastName}>
        <img
          src={student.pic}
          alt={`${student.firstName} ${student.lastName} avatar`}
        />
        <h3>{`${student.firstName} ${student.lastName}`}</h3>
        <p>Email: {student.email}</p>
        <p>Company: {student.company}</p>
        <p>Skill: {student.skill}</p>
        <p>Average: {calcAverage(student)}%</p>
      </div>
    );
  });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>{students}</div>
    </div>
  );
};

export default App;
