import { useEffect, useRef } from 'react';

function useInterval(callback: any, delay: number, arg: any) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    if (
      !savedCallback ||
      !savedCallback.current ||
      savedCallback.current === undefined ||
      savedCallback === undefined
    )
      return;
    function tick() {
      callback &&
        callback !== undefined &&
        savedCallback &&
        savedCallback !== undefined &&
        savedCallback.current &&
        savedCallback.current !== undefined &&
        savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay, arg);
      return () => clearInterval(id);
    }
  }, [delay, arg]);
}

export default useInterval;
