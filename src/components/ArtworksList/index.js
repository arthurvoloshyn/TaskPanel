import React, { Component } from "react";
import { withRouter } from "react-router";
import { NavLink } from 'react-router-dom';

import styles from "./styles.module.css";

class ArtworksList extends Component {
  render() {
    return (
      <div className={styles['artwork-list']}>
        <div>
          <h3 className={styles['header']}>Artworks</h3>
          {this.renderArtworkList()}
        </div>
        {this.renderSpotLight()}
      </div>
    );
  }

  renderArtworkList = () => {
    return this.props.artworks.map(artwork => {
      const { _id, title } = artwork;

      return (
        <NavLink
          key={_id}
          to={`/artworks/${_id}`}
          className={styles['artwork-row']}
          activeClassName={styles['active-artwork-row']}
        >
          <div
            className={styles['artwork-avatar']}
            style={{
              backgroundImage: `url(imgs/artworks/${_id}.jpg)`
            }}
          />
          <span>{`${title}`}</span>
        </NavLink>
      );
    });
  }

  renderSpotLight = () => {
    const { match: { params }, artworks } = this.props;
    const selectedArtworkId = params && params.artworkId;
    if (!selectedArtworkId) {
      return null;
    }
    const artworkInSpotlight = artworks.find(
      artwork => artwork._id === selectedArtworkId
    );
    const { title, _id } = artworkInSpotlight;
    const label = `${title}`;
    const imgUrl = `imgs/artworks/${_id}.jpg`;

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

export default withRouter(ArtworksList);
