import { render } from '@testing-library/react';
import List from './List';

const studentProfiles = [
  {
    city: 'Fushë-Muhurr',
    company: 'Yadel',
    email: 'iorton0@imdb.com',
    firstName: 'Ingaberg',
    grades: ['78', '100', '92', '86', '89', '88', '91', '87'],
    id: '1',
    lastName: 'Orton',
    pic: 'https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg',
    skill: 'Oracle'
  },
  {
    city: 'Sanghan',
    company: 'Avamm',
    email: 'cboards1@weibo.com',
    firstName: 'Clarke',
    grades: ['75', '89', '95', '93', '99', '82', '89', '76'],
    id: '2',
    lastName: 'Boards',
    pic: 'https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasautreprehenderit.jpg',
    skill: 'Sports'
  }
];

describe('<List /> component', () => {
  test('it renders correctly', () => {
    const list = render(<List studentProfiles={studentProfiles} />);

    expect(list.getByTestId('list-component')).toBeInTheDocument();
    expect(list.getAllByTestId('list-item')).toHaveLength(2);
    expect(list.getAllByTestId('list-item')).not.toHaveLength(3);
  });
});
