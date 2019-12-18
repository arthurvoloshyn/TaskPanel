import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

class Dashboard extends Component {
  render() {
    return (
      <div className={styles['dashboard']}>
        <div>
          <h3 className={styles['header']}>Artists</h3>
          {this.renderArtistList()}
        </div>
        {this.renderSpotLight()}
      </div>
    );
  }

  renderArtistList = () => {
    const { artists } = this.props;

    return artists.map(({ _id, firstName, lastName }) => (
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
  };

  renderSpotLight = () => {
    const {
      match: { params },
      artists
    } = this.props;
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
}

Dashboard.propTypes = {
  artists: PropTypes.array,
  match: PropTypes.shape({
    params: PropTypes.shape({
      artistId: PropTypes.string
    })
  })
};

Dashboard.defaultProps = {
  artists: [],
  match: null
};

export default withRouter(Dashboard);
