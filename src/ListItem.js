import { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { FaPlus, FaMinus } from 'react-icons/fa';

const ListItem = ({ student, index, addTag }) => {
  const [expand, setExpand] = useState(false);
  const [tagName, setTagName] = useState('');

  const average =
    student.grades.reduce((acc, grade) => {
      acc = acc + Number(grade);
      return acc;
    }, 0) / student.grades.length;

  const grades = student.grades.map((grade, index) => {
    return (
      <li key={uuidv4()}>
        Test {index + 1}: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{grade}%
      </li>
    );
  });

  const tagElements =
    student.tags && !!student.tags.length
      ? student.tags.map((tag) => {
          return (
            <StyledTag type="button" key={uuidv4()}>
              {tag}
            </StyledTag>
          );
        })
      : null;

  const handleChange = (e) => {
    setTagName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTag(tagName, student, index);
    setTagName('');
  };

  const handleClick = (e) => {
    setExpand(!expand);
  };

  return (
    <StyledContainer
      key={student.firstName + student.lastName}
      data-testid="list-item"
    >
      <StyledImage
        data-testid="image"
        src={student.pic}
        alt={'student avatar'}
      />
      <StyledStats>
        <StyledDiv>
          <StyledHeader>{`${student.firstName} ${student.lastName}`}</StyledHeader>
          <StyledExpand onClick={handleClick}>
            {expand ? <FaMinus /> : <FaPlus />}
          </StyledExpand>
        </StyledDiv>
        <StyledUl>
          <StyledLi key={uuidv4()}>Email: {student.email}</StyledLi>
          <StyledLi key={uuidv4()}>Company: {student.company}</StyledLi>
          <StyledLi key={uuidv4()}>Skill: {student.skill}</StyledLi>
          <StyledLi key={uuidv4()}>Average: {average}%</StyledLi>
          {expand ? <StyledSubUl>{grades}</StyledSubUl> : null}
          {tagElements}
        </StyledUl>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            value={tagName}
            onChange={handleChange}
            placeholder="Add a tag"
          ></StyledInput>
        </StyledForm>
      </StyledStats>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  align-items: flex-start;
  display: flex;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledStats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 0.75rem;
  width: 100%;
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

const StyledExpand = styled.button`
  border: none;
  outline: none;
  background: transparent;
  color: #9e9e9e;
  font-size: 2.25rem;
  margin: 1.25rem 1.25rem 0 0;
  padding: 0;
  :hover {
    color: black;
  }
`;

const StyledUl = styled.ul`
  color: #666;
  font-size: 1.1rem;
  list-style-type: none;
  margin: 0.75rem 0 0.5rem 0;
  padding-left: 1.5rem;
`;

const StyledSubUl = styled.ul`
  color: #666;
  font-size: 1.1rem;
  list-style-type: none;
  padding: 1.2rem 0 1rem 0;
`;

const StyledLi = styled.li`
  margin-bottom: 0.3rem;
`;

const StyledForm = styled.form`
  margin-left: 1.5rem;
`;

const StyledInput = styled.input`
  color: #666;
  border: none;
  outline: none;
  border-bottom: 2px solid #ddd;
  :focus {
    border-bottom: 2px solid #666;
  }
  ::placeholder {
    color: #afafaf;
  }
`;

const StyledTag = styled.button`
  color: #666;
  background: #e0e0e0;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  margin-right: 5px;
`;

export default ListItem;
