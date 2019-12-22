import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const RenderArtistList = ({ artists }) =>
  artists.map(({ _id, firstName, lastName }) => (
    <NavLink key={_id} to={`/artists/${_id}`} className={styles['artist-row']} activeClassName={styles['active-artist-row']}>
      <div
        className={styles['artist-avatar']}
        style={{
          backgroundImage: `url(imgs/artists/${_id}.png)`
        }}
      />
      <span>{`${firstName} ${lastName}`}</span>
    </NavLink>
  ));

RenderArtistList.propTypes = {
  artists: PropTypes.array
};

RenderArtistList.defaultProps = {
  artists: []
};

export default RenderArtistList;
