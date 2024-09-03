import React, { useState, useMemo } from "react";

const UseMemo = () => {
  function calculate() {
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    console.log("I am calculated");
    return result;
  }

  const [dependentCount, setDependentCount] = useState(10);
  const [independentCount, setInDependentCount] = useState(0);

  const value = useMemo(calculate, [dependentCount]);

  return (
    <div className="bg-white p-4">
      <button
        className="p-2 m-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
        onClick={() => setDependentCount(dependentCount + 1)}
      >
        Increment Dependent Count
      </button>
      <button
        className="p-2 m-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition duration-300"
        onClick={() => setInDependentCount(independentCount + 1)}
      >
        Increment Independent Count
      </button>
      <p>Dependent Count: {dependentCount}</p>
      <p>Independent Count: {independentCount}</p>
      <p>Memo Value: {value}</p>
    </div>
  );
};

export default UseMemo;
