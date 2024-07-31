import React from 'react';

const PopularDestinations = () => {
  return (
    <section className="popular-destinations">
      <h2>인기 여행지</h2>
      <div className="destination-box">
        <img src="dest1.jpg" alt="여행지 1" />
        <div className="info">
          <h3>여행지 이름 1</h3>
          <p>별점: ★★★★★</p>
        </div>
      </div>
      <div className="destination-box">
        <img src="dest2.jpg" alt="여행지 2" />
        <div className="info">
          <h3>여행지 이름 2</h3>
          <p>별점: ★★★★★</p>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
