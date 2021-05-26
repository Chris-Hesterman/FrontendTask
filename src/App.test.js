import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
    const app = render(<App />);

    expect(app.getByTestId('app-container')).toBeInTheDocument();
    expect(app.getByRole('textbox')).toBeInTheDocument();
    userEvent.type(app.getByRole('textbox'), 'ing');
    expect(app.getByRole('textbox')).toHaveValue('ing');
  });
});
