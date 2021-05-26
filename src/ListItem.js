const ListItem = ({ student, average }) => {
  return (
    <div key={student.firstName + student.lastName}>
      <img data-testid="image" src={student.pic} alt={'student avatar'} />
      <h3>{`${student.firstName} ${student.lastName}`}</h3>
      <p>Email: {student.email}</p>
      <p>Company: {student.company}</p>
      <p>Skill: {student.skill}</p>
      <p>Average: {average}%</p>
    </div>
  );
};

export default ListItem;
