import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const RenderArtworkList = ({ _id, title }) => (
  <NavLink to={`/artworks/${_id}`} className={styles['artwork-row']} activeClassName={styles['active-artwork-row']}>
    <div
      className={styles['artwork-avatar']}
      style={{
        backgroundImage: `url(imgs/artworks/${_id}.jpg)`
      }}
    />
    <span>{`${title}`}</span>
  </NavLink>
);

RenderArtworkList.propTypes = {
  _id: PropTypes.string,
  title: PropTypes.string
};

RenderArtworkList.defaultProps = {
  _id: '1',
  title: ''
};

export default RenderArtworkList;
