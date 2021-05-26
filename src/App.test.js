import { render, screen } from '@testing-library/react';
import axios from 'axios';
import App from './App';

const apiURL = 'https://api.hatchways.io/assessment/students';

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
    render(<App />);

    expect(screen.getByTestId('app-container')).toBeInTheDocument();
  });
});
