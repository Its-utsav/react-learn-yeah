import { useEffect, useState } from "react";

let y = 0;
const Day06 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component re-render at count : ", count);
    console.log("Y value", y);
  }, [y]);
  const updateCount = () => {
    setCount(count + 1);
    y++;
  };

  return (
    <>
      <h1>Use Of useEffect </h1>
      <div>
        {count} , {y}
      </div>
      <button type="button" onClick={updateCount}>
        Click Here To increase count
      </button>
    </>
  );
};

export default Day06;
