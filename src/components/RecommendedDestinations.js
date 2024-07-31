import React from 'react';

const RecommendedDestinations = () => {
  return (
    <section className="recommended-destinations">
      <h2>추천 여행지</h2>
      <div className="destination-box">
        <img src="dest3.jpg" alt="여행지 3" />
        <div className="info">
          <h3>여행지 이름 3</h3>
          <p>별점: ★★★★★</p>
        </div>
      </div>
      <div className="destination-box">
        <img src="dest4.jpg" alt="여행지 4" />
        <div className="info">
          <h3>여행지 이름 4</h3>
          <p>별점: ★★★★★</p>
        </div>
      </div>
    </section>
  );
};

export default RecommendedDestinations;
