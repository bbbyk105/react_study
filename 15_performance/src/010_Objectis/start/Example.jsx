import { useState } from "react";

const Example = () => {
  console.log("render")

  const [countA, setCountA] = useState({
    val: 0
  });

  const obj1 = { val: 0 };
  const obj3 = { val: 0 };
  const obj2 = {...obj1};
  const isSame = Object.is(obj1, obj2);
  console.log(isSame);

  return (
    <div className="parent">
      <div>
        <h3>再レンダリング？</h3>
        <button
          onClick={() => {
            setCountA(prev => {
              const newState = {...prev};
              // prev.val = 1;
              return newState;
            });
          }}
        >

          ボタンA
        </button>
      </div>
      <div>
        <p>ボタンクリック回数: {countA.val}</p>
      </div>
    </div>
  );
};

export default Example;
