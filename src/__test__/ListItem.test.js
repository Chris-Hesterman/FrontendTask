import { render, cleanup } from '@testing-library/react';
import userEvent, { specialChars } from '@testing-library/user-event';
import ListItem from '../ListItem';

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
const student2 = {
  city: 'Fushë-Muhurr',
  company: 'Yadel',
  email: 'iorton0@imdb.com',
  firstName: 'Ingaberg',
  grades: ['78', '100', '92', '86', '89', '88', '91', '87'],
  id: '1',
  lastName: 'Orton',
  pic: 'https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg',
  skill: 'Oracle',
  tags: ['new tag']
};

afterEach(cleanup);

describe('<ListItem />', () => {
  test('it renders correctly with no tags in profile', () => {
    const listItem = render(<ListItem student={student} index={2} />);

    expect(listItem.getByRole('heading')).toBeInTheDocument();
    expect(listItem.getByRole('img')).toBeInTheDocument();
    expect(listItem.getByText(/email:/i)).toBeInTheDocument();
    expect(listItem.getByText(/company:/i)).toBeInTheDocument();
    expect(listItem.getByText(/skill:/i)).toBeInTheDocument();
    expect(listItem.getByText(/average:/i)).toBeInTheDocument();
    expect(listItem.getByRole('textbox')).toBeInTheDocument();
    expect(listItem.getAllByRole('list')).toHaveLength(1);
    expect(listItem.getAllByRole('button')[0].name).toBe('expand');

    userEvent.click(listItem.getAllByRole('button')[0]);
    expect(listItem.getAllByRole('list')).toHaveLength(2);
  });

  test('user can add tags', () => {
    const handleChange = jest.fn();
    const addTag = jest.fn();

    const listItem = render(
      <ListItem
        student={student}
        index={2}
        onChange={handleChange}
        addTag={addTag}
      />
    );

    expect(
      listItem.getByRole('form', { name: /tagform/i })
    ).toBeInTheDocument();

    userEvent.type(listItem.getByRole('textbox'), `new tag`);
    expect(listItem.getByRole('textbox').value).toBe('new tag');

    userEvent.type(listItem.getByRole('textbox'), `${specialChars.enter}`);
    expect(listItem.getByRole('textbox').value).toBe('');
    expect(addTag).toHaveBeenCalled();
  });

  test('tags will be rendered when present', () => {
    const handleChange = jest.fn();
    const addTag = jest.fn();

    const listItem = render(
      <ListItem
        student={student2}
        index={2}
        onChange={handleChange}
        addTag={addTag}
      />
    );

    expect(listItem.getAllByRole('button')[0]).toBeInTheDocument();
    expect(listItem.getAllByRole('button')[1]).toBeInTheDocument();
    expect(listItem.getAllByRole('button')).toHaveLength(2);
    expect(listItem.getAllByRole('button')[1]).toHaveTextContent('new tag');
  });
});
