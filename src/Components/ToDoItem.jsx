import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ActionCreator } from "../store/action";
import { TrashIcon, InformationCircleIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

const ToDoItem = ({ item, removeItemFromList, changeItemStatus }) => {
  const { text, id, status } = item;
  const [itemStatus, setItemStauts] = useState(status);

  const completeTaskHandler = () => {
    itemStatus === "in progress"
      ? setItemStauts("complete")
      : setItemStauts("in progress");
  };

  useEffect(() => {
    changeItemStatus(item, itemStatus);
  }, [itemStatus])

  return (
    <>
      <div
        className={`flex justify-between items-start mb-4 rounded-lg bg-[#fff] ${
          itemStatus === "in progress" ? "border" : "border border-[#4BD88B]"
        }`}
      >
        <div className="relative flex w-full mr-2">
          <div
            className={`rounded-l-lg p-5 text-lg ${
              itemStatus === "in progress"
                ? "bg-[#F1F2FF] text-indigo-600"
                : "bg-[#4BD88B] text-white"
            }`}
          >
            {itemStatus === "in progress" ? (
              <InformationCircleIcon className="w-6 h-6 text-indigo-600" />
            ) : (
              <CheckCircleIcon className="w-6 h-6 text-white" />
            )}
          </div>
          <p className="p-5">{text}</p>
        </div>
        <div className="flex justify-between w-[7rem] p-5">
          <input
            id={id}
            name="task has been complete"
            type="checkbox"
            checked={itemStatus === "in progress" ? false : true}
            onChange={completeTaskHandler}
            className="h-6 w-6 rounded-lg text-indigo-600 focus:ring-indigo-500"
          />
          <button onClick={() => removeItemFromList(item)}>
            <TrashIcon className="w-6 h-6 text-[#FF5733]" />
          </button>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItemFromList(item) {
      dispatch(ActionCreator.removeItemFromList(item));
    },
    changeItemStatus(item, status) {
      dispatch(ActionCreator.changeItemStatus(item, status));
    },
  };
};

export { ToDoItem };
export default connect(null, mapDispatchToProps)(ToDoItem);