import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

import styles from './styles.module.css';

const RenderAddButton = ({ index, onAddButtonClick }) => (
  <Button data-index={index} className={styles['add-note']} onClick={onAddButtonClick}>
    + add note
  </Button>
);

RenderAddButton.propTypes = {
  index: PropTypes.number,
  onAddButtonClick: PropTypes.func
};

RenderAddButton.defaultProps = {
  index: 0,
  onAddButtonClick: () => {}
};

export default RenderAddButton;
