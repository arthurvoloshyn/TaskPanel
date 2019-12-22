import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const RenderSpotLight = ({ params, artists }) => {
  const selectedArtistId = params && params.artistId;
  if (!selectedArtistId) {
    return null;
  }
  const artistInSpotlight = artists.find(({ _id }) => _id === selectedArtistId);
  const { firstName, lastName, _id } = artistInSpotlight;
  const label = `${firstName} ${lastName}`;

  const imgUrl = `imgs/artists/${_id}.png`;

  return (
    <div className={styles['spotlight']}>
      <div
        className={styles['spotlight-img']}
        style={{
          backgroundImage: `url(${imgUrl})`
        }}
      />
      <div className={styles['spotlight-label']}>{label}</div>
    </div>
  );
};

RenderSpotLight.propTypes = {
  artists: PropTypes.array,
  params: PropTypes.shape({
    artistId: PropTypes.string
  })
};

RenderSpotLight.defaultProps = {
  artists: [],
  params: null
};

export default RenderSpotLight;
