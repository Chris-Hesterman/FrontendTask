import styled from 'styled-components';
import ListItem from './ListItem';

const StyledHr = styled.hr`
  border: 1px solid #eee;
  opacity: 0.7;
  margin: 0;
`;

const List = ({ studentProfiles }) => {
  const calcAverage = (student) => {
    const total = student.grades.reduce((acc, grade) => {
      acc = acc + Number(grade);
      return acc;
    }, 0);

    return total / student.grades.length;
  };

  const students = studentProfiles.map((student) => {
    let average = calcAverage(student);
    return (
      <div key={student.firstName + student.lastName}>
        <ListItem student={student} average={average} />
        <StyledHr />
      </div>
    );
  });

  return <div data-testid="list-component">{students}</div>;
};

export default List;
