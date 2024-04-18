import React from "react";

const CounterItem = ({ counter, startCounter, stopCounter }) => {
  return (
    <div className="text-white w-[80%] text-center mb-2 bg-black p-3 py-5 rounded-lg sm:w-[31%] md:w-[22%] lg:w-[18%]">
      <button
        className="border border-blue-400 rounded mb-2 text-base py-2 px-2"
        onClick={() =>
          counter.isStart ? stopCounter(counter) : startCounter(counter)
        }
      >
        {counter.isStart ? "Stop Counter" : "Start Counter"}
      </button>
      <p>{counter.value}</p>
    </div>
  );
};

export default CounterItem;
