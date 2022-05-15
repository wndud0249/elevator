import React, { ReactNode, useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }: { children: ReactNode }) => {
  const [nowFloor, setNowFloor] = useState(0);
  const [pushedFloor, setPushedFloor] = useState(0);

  // opened,opening,closed,closing
  const [doorStatus, setDoorStatus] = useState('opened');
  let floorInterval: any;

  const onClickFloorNumber = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!(e.target instanceof HTMLDivElement)) return;
    if (!e.target.dataset.floorNumber) return;
    if (nowFloor === parseInt(e.target.dataset.floorNumber)) return;
    setDoorStatus('closing');
    setPushedFloor(parseInt(e.target.dataset.floorNumber));
    floorInterval = setInterval(moveFloor, 2000, e.target.dataset.floorNumber);
  };

  function moveFloor(floor: string) {
    console.log('move 중', nowFloor);

    if (parseInt(floor) && nowFloor < parseInt(floor)) {
      setDoorStatus('closed');
      setNowFloor(nowFloor + 1);
      console.log(nowFloor);
    } else if (floor && nowFloor > parseInt(floor)) {
      setDoorStatus('closed');
      setNowFloor(nowFloor - 1);
    } else if (floor === 'close') {
      setDoorStatus('closing');
    } else if (floor === 'open') {
      setDoorStatus('opening');
    } else if (nowFloor === parseInt(floor)) {
      clearInterval(floorInterval);
    }
  }
  useEffect(() => {
    setNowFloor(nowFloor);
  }, [nowFloor]);

  return (
    <>
      <Header nowFloor={nowFloor} />
      <div className={`elevator_wrap ${doorStatus}`}>
        <div className="elevator_wrap_left">
          <div className="front"></div>
          <div className="side"></div>
        </div>
        <div className="elevator_left">
          <div className="door"></div>
          <div className="bar"></div>
        </div>
        <div className="elevator_wrap_right">
          <div className="side"></div>
          <div className="front">
            <div className="side_floor_numbers_wrapper" onClick={onClickFloorNumber}>
              <div className="peg peg_1">x</div>
              <div className="peg peg_2">x</div>
              <div className="peg peg_3">x</div>
              <div className="peg peg_4">x</div>
              <div className="floor_number" data-floor-number="5">
                5
              </div>
              <div className="floor_number" data-floor-number="4">
                4
              </div>
              <div className="floor_number" data-floor-number="3">
                3
              </div>
              <div className="floor_number" data-floor-number="2">
                2
              </div>
              <div className="floor_number" data-floor-number="1">
                1
              </div>
              <div className="floor_number" data-floor-number="0"></div>
              <div className="floor_number" data-floor-number="close">
                &gt;&lt;
              </div>
              <div className="floor_number" data-floor-number="open">
                &lt;&gt;
              </div>
            </div>
          </div>
        </div>
        <div className="elevator_right">공사중</div>
      </div>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
