import React, { useEffect, useState } from "react";
import CounterItem from "./CounterItem";

const BoxCounter = () => {
  const [counters, setCounters] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const addCounter = () => {
    const newCounter = {
      id: Date.now(),
      interValRef: null,
      isStart: false,
      value: 0,
    };
    setCounters([...counters, newCounter]);
  };

  const startCounter = (counterValue) => {
    const interValRef = setInterval(() => {
      setCounters((prevCounter) => {
        return prevCounter.map((count) => {
          if (count.id === counterValue.id) {
            return { ...count, value: count.value + 1 };
          }
          return count;
        });
      });
    }, 1000);
    setCounters(
      counters.map((count) => {
        if (count.id === counterValue.id) {
          return { ...count, isStart: true, interValRef };
        } else {
          return count;
        }
      })
    );
  };

  const stopCounter = (counter) => {
    clearInterval(counter.interValRef);
    setCounters(
      counters.map((count) => {
        if (count.id === counter.id) {
          return { ...count, isStart: false, interValRef: null };
        } else {
          return count;
        }
      })
    );
  };

  useEffect(() => {
    setTotalCount(counters.reduce((acc, count) => acc + count.value, 0));
  }, [counters]);

  return (
    <>
      <div className=" flex items-center justify-between px-20 py-10">
        <button
          className="p-3 bg-sky-900 text-white rounded"
          onClick={addCounter}
        >
          Add Counter
        </button>
        <p className="border bg-black text-white p-2 text-lg rounded">
          {totalCount}
        </p>
      </div>
      <div className="w-5/6 flex justify-center mx-auto gap-4 flex-wrap sm:justify-normal">
        {counters?.map((counter) => {
          return (
            <CounterItem
              key={counter.id}
              counter={counter}
              startCounter={startCounter}
              stopCounter={stopCounter}
            />
          );
        })}
      </div>
    </>
  );
};

export default BoxCounter;
