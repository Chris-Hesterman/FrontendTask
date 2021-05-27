import styled from 'styled-components';
import ListItem from './ListItem';

const List = ({ studentProfiles, addTag }) => {
  const students = studentProfiles.map((student, index) => {
    return (
      <div key={student.firstName + student.lastName}>
        <ListItem student={student} index={index} addTag={addTag} />
        <StyledHr />
      </div>
    );
  });

  return (
    <StyledContainer data-testid="list-component">{students}</StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
`;

const StyledHr = styled.hr`
  border: 1px solid #eee;
  margin: 0;
  opacity: 0.7;
`;

export default List;
