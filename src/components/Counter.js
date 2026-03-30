import { useEffect, useState } from "react";
const formatNumber = (num, end) => {
  // Handle K format
  if (end >= 1000 && end < 1000000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }

  // Handle decimals (like 1.25)
  if (end % 1 !== 0) {
    return num.toFixed(2).replace(/\.00$/, "");
  }

  // Normal integers
  return Math.floor(num);
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