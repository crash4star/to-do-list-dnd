import React, { useState, createRef } from "react";
import { connect } from "react-redux";
import { ActionCreator } from "../store/action";

const Bar = ({ addItemInList }) => {
  const [value, setValue] = useState("");
  const itemRef = createRef();

  const addItem = () => {
    if (value.split(" ").join("").length > 0) {
      addItemInList(value);
      setValue("");
    } else {
      alert("empty");
    }
  };

  const inputHandler = () => {
    setValue(itemRef.current.value);
  };

  return (
    <>
      <input
        ref={itemRef}
        id="search"
        name="search"
        type="text"
        autoComplete="search"
        required
        value={value}
        onChange={inputHandler}
        className="relative block w-full mr-5 appearance-none rounded border px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#333] focus:outline-none sm:text-sm"
        placeholder="Netflix and chill..."
      />
      <button
        onClick={addItem}
        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-8 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Add
      </button>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemInList(item) {
      dispatch(ActionCreator.addItemInList(item));
    },
  };
};

export { Bar };
export default connect(null, mapDispatchToProps)(Bar);