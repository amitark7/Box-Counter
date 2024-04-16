import React, { useState } from "react";
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

  const startCounter = (id) => {
    const counter = counters.find((cnt) => cnt.id === id);
    if (counter && !counter.interValRef) {
      const interValRef = setInterval(() => {
        setCounters((prevCounter) => {
          const update = prevCounter.map((cnt) => {
            if (cnt.id === id) {
              return { ...cnt, value: cnt.value + 1 };
            } else {
              return cnt;
            }
          });
          return update;
        });
      }, 1000);
      setCounters(
        counters.map((cnt) => {
          if (cnt.id === id) {
            return { ...cnt, isStart: true, interValRef };
          } else {
            return cnt;
          }
        })
      );
    }
  };
  const stopCounter = (id) => {
    const counter = counters.find((cnt) => cnt.id === id);
    if (counter && counter.interValRef) {
      clearInterval(counter.interValRef);
      setCounters(
        counters.map((cnt) => {
          if (cnt.id === id) {
            return { ...cnt, isStart: false, interValRef: null };
          } else {
            return cnt;
          }
        })
      );
    }
  };

  return (
    <>
      <div className=" flex items-center justify-between px-20 py-10">
        <button className="p-3 bg-sky-900 text-white" onClick={addCounter}>
          Add Counter
        </button>
        <p className="border bg-black text-white p-2 text-lg">{totalCount}</p>
      </div>
      <div className="w-5/6 flex mx-auto gap-4 flex-wrap">
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
