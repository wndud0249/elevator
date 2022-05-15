import React from 'react';

const Header = ({ nowFloor }: { nowFloor: number }) => {
  return (
    <div className="header_wrapper">
      <div className="front">
        <div className="front_numbers_wrapper">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
      </div>
      <div className="floor"></div>
    </div>
  );
};

export default Header;
