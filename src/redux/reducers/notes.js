import { load } from 'redux-localstorage-simple';
import { ADD_NOTE } from "../actions/notes";

let initState = load({ namespace: 'todo-list' });

if (!initState || !initState.notes || !initState.notes.length) {
  initState = {
    notes: ["note 1", "note 2", "note 3", "note 4"],
  }
}

export default (state = initState.notes, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state.slice(0, action.afterIndex + 2),
        action.text,
        ...state.slice(action.afterIndex + 2)
      ];
    default:
      return state;
  }
}
