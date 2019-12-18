import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

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
    const { artworks } = this.props;

    return artworks.map(({ _id, title }) => (
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
  };

  renderSpotLight = () => {
    const {
      match: { params },
      artworks
    } = this.props;
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
}

ArtworksList.propTypes = {
  artworks: PropTypes.array,
  match: PropTypes.shape({
    params: PropTypes.shape({
      artworkId: PropTypes.string
    })
  })
};

ArtworksList.defaultProps = {
  artworks: [],
  match: null
};

export default withRouter(ArtworksList);
