import { render, screen } from '@testing-library/react';
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
    render(<ListItem student={student} average={average} />);

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(/email:/i)).toBeInTheDocument();
    expect(screen.getByText(/company:/i)).toBeInTheDocument();
    expect(screen.getByText(/skill:/i)).toBeInTheDocument();
    expect(screen.getByText(/average:/i)).toBeInTheDocument();
  });
});
