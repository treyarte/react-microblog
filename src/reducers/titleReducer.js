import { ADD_TITLE, REMOVE_TITLE, UPDATE_TITLE } from '../actions/actionTypes';
const INITIAL_STATE = {
  titles: {},
};

const titleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TITLE:
      return {
        titles: {
          ...state.titles,
          ...action.title,
        },
      };
    case UPDATE_TITLE:
      const titles = action.titles;
      return {
        titles,
      };

    case REMOVE_TITLE:
      const id = action.id;
      delete state.titles[id];
      return {
        titles: {
          ...state.titles,
        },
      };
    default:
      return state;
  }
};

export default titleReducer;
