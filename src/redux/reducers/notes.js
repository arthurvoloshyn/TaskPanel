import { load } from 'redux-localstorage-simple';

import { ADD_NOTE } from '../actions/notes';

let initState = load({ namespace: 'todo-list' });

if (!initState || !initState.notes || !initState.notes.length) {
  initState = {
    notes: ['note 1', 'note 2', 'note 3', 'note 4']
  };
}

const notes = (state = initState.notes, { type, afterIndex, text }) => {
  switch (type) {
    case ADD_NOTE:
      return [...state.slice(0, afterIndex + 2), text, ...state.slice(afterIndex + 2)];
    default:
      return state;
  }
};

export default notes;
