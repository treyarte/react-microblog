import titleReducer from '../reducers/titleReducer';
import { ADD_TITLE, REMOVE_TITLE, UPDATE_TITLE } from '../actions/actionTypes';

describe('Title reducer', () => {
  const INITIAL_STATE = {
    titles: {
      1: {
        title: 'First Post',
        description: 'Best post ever!',
        votes: 0,
      },
      2: {
        title: 'Second Post',
        description: 'A very good post!',
        votes: 0,
      },
    },
  };

  it('should return the default state', () => {
    expect(titleReducer(INITIAL_STATE, {})).toEqual(INITIAL_STATE);
  });

  it('should add a title and return the state', () => {
    const newTitle = {
      3: { title: 'New Post', description: 'Person 5!', votes: 5 },
    };
    expect(
      titleReducer(INITIAL_STATE, { type: ADD_TITLE, title: newTitle })
    ).toEqual({
      titles: {
        ...INITIAL_STATE.titles,
        ...newTitle,
      },
    });
  });

  it('should update a title and return the state', () => {
    const titles = INITIAL_STATE.titles;
    const updatedTitle = {
      title: 'Updated Post',
      description: 'Persona 5 Royal!',
      votes: 1,
    };
    titles[1] = updatedTitle;

    expect(titleReducer(INITIAL_STATE, { type: UPDATE_TITLE, titles })).toEqual(
      {
        titles: {
          ...titles,
        },
      }
    );
  });

  it('should remove a title and return the state', () => {
    const id = 1;

    expect(titleReducer(INITIAL_STATE, { type: REMOVE_TITLE, id })).toEqual({
      titles: { 2: INITIAL_STATE.titles[2] },
    });
  });
});
