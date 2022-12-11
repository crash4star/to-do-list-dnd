export const ActionType = {
  ADD_ITEM_IN_LIST: "Add new item in to do list",
  REMOVE_ITEM_FROM_LIST: "Remove item form list",
  UPDATE_LIST: "List has been updated",
  CHANGE_ITEM_STATUS: "Item status has been changed",
};

export const ActionCreator = {
  addItemInList: (item) => {
    return {
      type: ActionType.ADD_ITEM_IN_LIST,
      payload: item,
    };
  },
  removeItemFromList: (item) => {
    return {
      type: ActionType.REMOVE_ITEM_FROM_LIST,
      payload: item,
    };
  },
  changeItemStatus: (item, status) => {
    return {
      type: ActionType.CHANGE_ITEM_STATUS,
      payload: { item, status },
    };
  },
  updateList: (list) => {
    return {
      type: ActionType.UPDATE_LIST,
      payload: list,
    };
  },
};
