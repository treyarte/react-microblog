import {
  ADD_TITLE,
  REMOVE_TITLE,
  UPDATE_TITLE,
  FETCH_TITLES,
  VOTE_TITLE,
} from '../actions/actionTypes';
const INITIAL_STATE = {
  titles: {},
};

const titleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TITLES:
      return { titles: { ...state.titles, ...action.titles } };

    case ADD_TITLE:
      const title = {
        [action.title.id]: {
          title: action.title.title,
          description: action.title.description,
          vote: action.title.vote,
        },
      };
      return {
        titles: {
          ...state.titles,
          ...title,
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

    case VOTE_TITLE: {
      const { id, direction } = action.vote;
      const titles = state.titles;

      titles[id].votes += direction === 'up' ? +1 : -1;

      return {
        titles: {
          ...titles,
        },
      };
    }
    default:
      return state;
  }
};

export default titleReducer;
