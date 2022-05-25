import { createStore } from 'redux';
import { ADD, REMOVE, DONE, FAVOURITE } from './constants';

const initialState = {
  todos: [
    {
      text: 'Some text content',
      id: 1,
      done: false,
      favourite: false,
    },
  ],
};

const noteReducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return {
        todos: [...state.todos, action.payload],
      };

    case REMOVE:
      return {
        todos: state.todos.filter((note) => note.id !== action.payload),
      };

    case DONE:
      const newToDoState = [...state.todos];
      const foundIndex = newToDoState.findIndex(
        (note) => note.id === action.payload
      );
      newToDoState[foundIndex] = {
        ...newToDoState[foundIndex],
        done: !newToDoState[foundIndex].done,
      };
      return {
        todos: newToDoState,
      };

    case FAVOURITE:
      const favourites = [...state.todos];
      const foundNewIndex = favourites.findIndex(
        (note) => note.id === action.payload
      );
      favourites[foundNewIndex] = {
        ...favourites[foundNewIndex],
        favourite: !favourites[foundNewIndex].favourite,
      };
      return {
        todos: favourites,
      };

    default:
      return state;
  }
};

export const store = createStore(noteReducer, initialState);
