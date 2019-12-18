import React from 'react';

import NavBar from '../../NavBar';
import ArtworksList from '../../ArtworksList';

const artworks = [
  { _id: '1', title: 'In the event of sinking' },
  { _id: '2', title: 'Refugees in a nutshell' },
  { _id: '3', title: 'Solidarity' },
  { _id: '4', title: 'The rehearsal' }
];

const Artworks = () => (
  <div>
    <NavBar />
    <ArtworksList artworks={artworks} />
  </div>
);

export default Artworks;
