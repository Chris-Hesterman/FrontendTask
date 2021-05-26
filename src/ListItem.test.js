import { render } from '@testing-library/react';
import ListItem from './ListItem';

const student = {
  city: 'Fushë-Muhurr',
  company: 'Yadel',
  email: 'iorton0@imdb.com',
  firstName: 'Ingaberg',
  grades: ['78', '100', '92', '86', '89', '88', '91', '87'],
  id: '1',
  lastName: 'Orton',
  pic: 'https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg',
  skill: 'Oracle'
};

const average = 88.875;

describe('<ListItemm />', () => {
  test('it renders correctly', () => {
    const listItem = render(<ListItem student={student} average={average} />);

    expect(listItem.getByRole('heading')).toBeInTheDocument();
    expect(listItem.getByRole('img')).toBeInTheDocument();
    expect(listItem.getByText(/email:/i)).toBeInTheDocument();
    expect(listItem.getByText(/company:/i)).toBeInTheDocument();
    expect(listItem.getByText(/skill:/i)).toBeInTheDocument();
    expect(listItem.getByText(/average:/i)).toBeInTheDocument();
  });
});
