import { ADD, REMOVE, DONE, FAVOURITE } from './constants';

export const addTodos = (note) => ({
  type: ADD,
  payload: note,
});

export const removeTodo = (id) => ({
  type: REMOVE,
  payload: id,
});

export const completed = (id) => ({
  type: DONE,
  payload: id,
});

export const favourite = (id) => ({
  type: FAVOURITE,
  payload: id,
});
