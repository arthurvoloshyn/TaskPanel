import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import RenderSpotLight from './RenderSpotLight';
import RenderArtworkList from './RenderArtworkList';

import styles from './styles.module.css';

const ArtworksList = ({ artworks, match: { params } }) => (
  <div className={styles['artwork-list']}>
    <div>
      <h3 className={styles['header']}>Artworks</h3>
      {artworks.map(({ _id, title }) => (
        <RenderArtworkList key={_id} _id={_id} title={title} />
      ))}
    </div>
    <RenderSpotLight params={params} artworks={artworks} />
  </div>
);

ArtworksList.propTypes = {
  artworks: PropTypes.array,
  match: PropTypes.shape({
    params: PropTypes.object
  })
};

ArtworksList.defaultProps = {
  artworks: [],
  match: {
    params: null
  }
};

export default withRouter(ArtworksList);
