import ListItem from './ListItem';

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
      </div>
    );
  });

  return <div data-testid="list-component">{students}</div>;
};

export default List;
