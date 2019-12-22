import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import RenderSpotLight from './RenderSpotLight';
import RenderArtistList from './RenderArtistList';

import styles from './styles.module.css';

const Dashboard = ({ artists, match: { params } }) => (
  <div className={styles['dashboard']}>
    <div>
      <h3 className={styles['header']}>Artists</h3>
      <RenderArtistList artists={artists} />
    </div>
    <RenderSpotLight params={params} artists={artists} />
  </div>
);

Dashboard.propTypes = {
  artists: PropTypes.array,
  match: PropTypes.shape({
    params: PropTypes.object
  })
};

Dashboard.defaultProps = {
  artists: [],
  match: {
    params: null
  }
};

export default withRouter(Dashboard);
