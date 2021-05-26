import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledStats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 0.75rem;
`;

const StyledHeader = styled.h1`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 2.8rem;
  margin: 0.5rem 0 0 0;
`;

const StyledImage = styled.img`
  height: 8.6rem;
  border: 2px solid #ddd;
  border-radius: 50%;
  margin: 1.8rem 1.8rem;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  padding-left: 1.5rem;
  font-size: 1.1rem;
  margin-top: 0.75rem 0 0.5rem 0;
  color: #666;
`;

const StyledLi = styled.li`
  margin-bottom: 0.3rem;
`;

const ListItem = ({ student, average }) => {
  return (
    <StyledContainer key={student.firstName + student.lastName}>
      <StyledImage
        data-testid="image"
        src={student.pic}
        alt={'student avatar'}
      />
      <StyledStats>
        <StyledHeader>{`${student.firstName} ${student.lastName}`}</StyledHeader>
        <StyledUl>
          <StyledLi key={uuidv4()}>Email: {student.email}</StyledLi>
          <StyledLi key={uuidv4()}>Company: {student.company}</StyledLi>
          <StyledLi key={uuidv4()}>Skill: {student.skill}</StyledLi>
          <StyledLi key={uuidv4()}>Average: {average}%</StyledLi>
        </StyledUl>
      </StyledStats>
    </StyledContainer>
  );
};

export default ListItem;
