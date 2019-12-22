import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const RenderNote = ({ note }) => <div className={styles['note-list-item']}>{note}</div>;

RenderNote.propTypes = {
  note: PropTypes.string
};

RenderNote.defaultProps = {
  note: 'note 1'
};

export default RenderNote;
