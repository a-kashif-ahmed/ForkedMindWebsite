import { useEffect, useState } from "react";
const formatNumber = (num, end) => {
  if (end % 1 !== 0) {
    return num.toFixed(2); // decimal numbers
  }
  return Math.floor(num); // integers
};

const Counter = ({ end, duration = 1500 }) => {
    
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); // ~60fps

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <>{formatNumber(count, end)}</>;
};

export default Counter;