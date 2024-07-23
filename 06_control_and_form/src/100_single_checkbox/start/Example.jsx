import { useState } from "react";

const Example = () => {

  const [isChecked, setIsChecked] =useState(true);
  return (
    <div>
      <label htmlFor="my-check">
        チェック：
      </label>
      <input 
      type="checkbox"
      id="my-check"
      checked={isChecked}
      onChange={() => setIsChecked(prevStates=>!prevStates)}
       />
       <div>{isChecked ? "ON" : "OFF"}</div>
    </div>
  );
};

export default Example;
