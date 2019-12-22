import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const RenderLink = ({ page }) => (
  <NavLink className={styles['link']} activeClassName={styles['active-link']} to={`/${page}`}>
    {page}
  </NavLink>
);

RenderLink.propTypes = {
  page: PropTypes.string
};

RenderLink.defaultProps = {
  page: ''
};

export default RenderLink;
