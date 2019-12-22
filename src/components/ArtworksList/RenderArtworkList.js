import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const RenderArtworkList = ({ artworks }) =>
  artworks.map(({ _id, title }) => (
    <NavLink key={_id} to={`/artworks/${_id}`} className={styles['artwork-row']} activeClassName={styles['active-artwork-row']}>
      <div
        className={styles['artwork-avatar']}
        style={{
          backgroundImage: `url(imgs/artworks/${_id}.jpg)`
        }}
      />
      <span>{`${title}`}</span>
    </NavLink>
  ));

RenderArtworkList.propTypes = {
  artworks: PropTypes.array
};

RenderArtworkList.defaultProps = {
  artworks: []
};

export default RenderArtworkList;
