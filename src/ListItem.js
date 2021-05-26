import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const StyledContainer = styled.div`
  align-items: center;
  display: flex;
`;

const StyledStats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 0.75rem;
`;

const StyledHeader = styled.h1`
  font-weight: 700;
  font-size: 2.8rem;
  margin: 0.5rem 0 0 0;
  text-transform: uppercase;
`;

const StyledImage = styled.img`
  border: 2px solid #ddd;
  border-radius: 50%;
  height: 8.6rem;
  margin: 1.8rem 1.8rem;
`;

const StyledUl = styled.ul`
  color: #666;
  font-size: 1.1rem;
  list-style-type: none;
  margin-top: 0.75rem 0 0.5rem 0;
  padding-left: 1.5rem;
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
