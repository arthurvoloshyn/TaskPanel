import React from 'react';
import { withRouter } from 'react-router';

import RenderLink from './RenderLink';

import styles from './styles.module.css';

const pages = ['notes', 'artists', 'artworks'];

const NavBar = () => (
  <div className={styles['nav-bar']}>
    {pages.map((page, i) => (
      <RenderLink key={i} page={page} />
    ))}
  </div>
);

export default withRouter(NavBar);
