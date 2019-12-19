export const ADD_NOTE = 'ADD_NOTE';

export const addNote = (text, afterIndex) => ({
  type: ADD_NOTE,
  text,
  afterIndex
});
