import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addNote } from '../../redux/actions/notes';

import RenderNote from './RenderNote';
import RenderAddButton from './RenderAddButton';

import styles from './styles.module.css';

const enhance = connect(({ notes }) => ({ notes }), { addNote });

const NotesList = ({ notes, addNote }) => {
  const onAddButtonClick = ({
    target: {
      dataset: { index }
    }
  }) => {
    const text = window.prompt('Note text:');

    if (text) {
      addNote(text, index - 1);
    } else if (text === '') {
      alert('Error! Note has no name.');
    } else {
      alert('Operation is over.');
    }
  };

  if (!notes.length) {
    return <RenderAddButton onAddButtonClick={onAddButtonClick} />;
  }

  return (
    <ul className={styles['note-list']}>
      {notes.map((note, index) => (
        <li key={index}>
          <RenderNote note={note} />
          <RenderAddButton index={index} onAddButtonClick={onAddButtonClick} />
        </li>
      ))}
    </ul>
  );
};

NotesList.propTypes = {
  notes: PropTypes.array,
  addNote: PropTypes.func
};

NotesList.defaultProps = {
  notes: [],
  addNote: () => {}
};

export default enhance(NotesList);
