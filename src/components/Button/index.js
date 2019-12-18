import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Button = ({ children, ...props }) => (
  <button className={styles['button']} {...props}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string
};

Button.defaultProps = {
  children: ''
};

export default Button;
