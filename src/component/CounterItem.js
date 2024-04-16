import React from "react";

const CounterItem = ({ counter, startCounter, stopCounter }) => {
  return (
    <div className="text-white w-[180px] text-center mb-2 bg-black p-8 rounded-lg">
      <button
        className="border border-blue-400 mb-2 text-base py-2 px-1"
        onClick={() =>
          counter.isStart ? stopCounter(counter.id) : startCounter(counter.id)
        }
      >
        {counter.isStart ? "Stop Counter" : "Start Counter"}
      </button>
      <p>{counter.value}</p>
    </div>
  );
};

export default CounterItem;
