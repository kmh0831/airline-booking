import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="banner-top">
        <a href="/" className="logo">Airline Booking</a>
        <nav className="nav-links">
          <a href="/hotels">호텔</a>
          <a href="/flights">항공권</a>
          <a href="/packages">항공+호텔</a>
          <a href="/restaurants">유명 맛집</a>
          <a href="/promotions">프로모션</a>
          <a href="/guides">여행 가이드</a>
        </nav>
      </div>
      <div className="menu">
        <a href="/signup">회원가입</a>
        <a href="/login">로그인</a>
        <a href="/support">고객센터</a>
        <a href="/profile">나의 정보</a>
      </div>
    </header>
  );
};

export default Header;
