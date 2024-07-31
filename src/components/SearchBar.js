import React, { useState } from 'react';

const SearchBar = () => {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [people, setPeople] = useState(1);

  const handleSearch = () => {
    // 검색 로직 구현
    console.log({
      destination,
      startDate,
      endDate,
      people,
    });
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="여행지"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <input
        type="number"
        placeholder="인원수"
        value={people}
        onChange={(e) => setPeople(e.target.value)}
      />
      <button type="button" onClick={handleSearch}>
        검색
      </button>
    </div>
  );
};

export default SearchBar;
