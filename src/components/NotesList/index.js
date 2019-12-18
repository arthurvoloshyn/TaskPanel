import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addNote } from '../../redux/actions/notes';
import Button from '../Button';

import styles from './styles.module.css';

const enhance = connect(({ notes }) => ({ notes }), { addNote });

class NotesList extends Component {
  render() {
    const { notes } = this.props;

    if (!notes.length) {
      return this.renderAddButton();
    }

    return (
      <ul className={styles['note-list']}>
        {notes.map((note, index) => {
          return (
            <li key={index}>
              {this.renderNote(note)}
              {this.renderAddButton(index)}
            </li>
          );
        })}
      </ul>
    );
  }

  renderNote = note => <div className={styles['note-list-item']}>{note}</div>;

  renderAddButton = (index = 0) => (
    <Button data-index={index} className={styles['add-note']} onClick={this.onAddButtonClick}>
      + add note
    </Button>
  );

  onAddButtonClick = ({
    target: {
      dataset: { index }
    }
  }) => {
    const text = window.prompt('Note text:');

    if (text) {
      this.props.addNote(text, index - 1);
    } else if (text === '') {
      alert('Error! Note has no name.');
    } else {
      alert('Operation is over.');
    }
  };
}

NotesList.propTypes = {
  notes: PropTypes.array,
  addNote: PropTypes.func
};

NotesList.defaultProps = {
  notes: [],
  addNote: () => {}
};

export default enhance(NotesList);
