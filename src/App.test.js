import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import App from './App';
import List from './List';

const apiURL = 'https://api.hatchways.io/assessment/students';

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

describe('<App />', () => {
  test('correctly fetches API data', () => {
    return axios.get(apiURL).then((response) => {
      const students = response.data.students;
      const keys = Object.keys(response.data.students[0]);

      expect(students).toBeInstanceOf(Array);
      expect(students.length).toBeGreaterThan(0);
      expect(students[0]).toBeInstanceOf(Object);
      expect(students[0]).not.toBeInstanceOf(Array);
      expect(keys.length).toBe(9);
    });
  });

  test('correctly renders <App /> component', () => {
    const app = render(<App />);

    expect(app.getByTestId('app-container')).toBeInTheDocument();
    expect(app.getByRole('textbox')).toBeInTheDocument();
    userEvent.type(app.getByRole('textbox'), 'ing');
    expect(app.getByRole('textbox')).toHaveValue('ing');
  });
});
