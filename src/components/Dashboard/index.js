import React, { Component } from "react";
import { withRouter } from "react-router";
import { NavLink } from 'react-router-dom';

import styles from "./styles.module.css";

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
    return this.props.artists.map(artist => {
      const { _id, firstName, lastName } = artist;

      return (
        <NavLink
          key={_id}
          to={`/artists/${_id}`}
          className={styles['artist-row']}
          activeClassName={styles['active-artist-row']}
        >
          <div
            className={styles['artist-avatar']}
            style={{
              backgroundImage: `url(imgs/artists/${_id}.png)`
            }}
          />
          <span>{`${firstName} ${lastName}`}</span>
        </NavLink>
      );
    });
  }

  renderSpotLight = () => {
    const { match: { params }, artists } = this.props;
    const selectedArtistId = params && params.artistId;
    if (!selectedArtistId) {
      return null;
    }
    const artistInSpotlight = artists.find(
      artist => artist._id === selectedArtistId
    );
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
  }
}

export default withRouter(Dashboard);
