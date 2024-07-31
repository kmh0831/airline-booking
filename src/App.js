import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Promotion from './components/Promotion';
import PopularDestinations from './components/PopularDestinations';
import RecommendedDestinations from './components/RecommendedDestinations';

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <Promotion />
      <PopularDestinations />
      <RecommendedDestinations />
    </div>
  );
}

export default App;
