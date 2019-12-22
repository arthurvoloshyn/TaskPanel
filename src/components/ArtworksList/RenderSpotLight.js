import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const RenderSpotLight = ({ params, artworks }) => {
  const selectedArtworkId = params && params.artworkId;
  if (!selectedArtworkId) {
    return null;
  }
  const artworkInSpotlight = artworks.find(({ _id }) => _id === selectedArtworkId);
  const { title, _id } = artworkInSpotlight;
  const imgUrl = `imgs/artworks/${_id}.jpg`;

  return (
    <div className={styles['spotlight']}>
      <div
        className={styles['spotlight-img']}
        style={{
          backgroundImage: `url(${imgUrl})`
        }}
      />
      <div className={styles['spotlight-label']}>{title}</div>
    </div>
  );
};

RenderSpotLight.propTypes = {
  artworks: PropTypes.array,
  params: PropTypes.shape({
    artworkId: PropTypes.string
  })
};

RenderSpotLight.defaultProps = {
  artworks: [],
  params: null
};

export default RenderSpotLight;
