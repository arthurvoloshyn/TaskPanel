import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router';
import { HashRouter as Router } from 'react-router-dom';

import configureStore from './redux/store/configureStore';

import HomePage from './components/Pages/Home';
import ArtistsPage from './components/Pages/Artists';
import ArtworksPage from './components/Pages/Artworks';
import NotesPage from './components/Pages/Notes';

const store = configureStore({});

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/notes" component={NotesPage} />
        <Route path="/artists/:artistId*" component={ArtistsPage} />
        <Route path="/artworks/:artworkId*" component={ArtworksPage} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
