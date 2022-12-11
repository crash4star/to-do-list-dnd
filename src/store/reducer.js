import { v4 as uuidv4 } from "uuid";
import { ActionType } from "./action";

const initialState = {
  list: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_ITEM_IN_LIST:
      return {
        ...state,
        list: [{ id: uuidv4(), text: action.payload, status: 'in progress' }, ...state.list],
      };

    case ActionType.REMOVE_ITEM_FROM_LIST:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload.id)
      };

    case ActionType.CHANGE_ITEM_STATUS:
      const {item, status} = action.payload;

      const newList = state.list.map(listItem => {
        if (item.id === listItem.id) {
          listItem.status = status;
          return listItem;
        } else {
          return listItem;
        }
      });

      return {
        ...state,
        list: newList
      };

    case ActionType.UPDATE_LIST:
      return {
        ...state,
        list: action.payload
      };

    default:
      return state;
  }
};

export { reducer };