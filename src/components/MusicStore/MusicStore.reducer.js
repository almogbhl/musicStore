import {
  FETCH_STORE_DATA_BEGIN,
  FETCH_STORE_DATA_SUCCEED,
  FETCH_STORE_DATA_FAILED
} from "./MusicStore.action";

import {
  DELETE_ITEM,
  DUPLICATE_ITEM,
  deleteItem
} from "./Browse/List/Card/Card.action";

let initialState = {
  vinyl_records: null,
  cds: null,
  is_loading: false,
  errMsg: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STORE_DATA_BEGIN:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_STORE_DATA_SUCCEED:
      return {
        ...state,
        vinyl_records: action.payload["vinyl_records"],
        cds: action.payload["cds"],
        isLoading: false
      };
    case FETCH_STORE_DATA_FAILED:
      return {
        ...state,
        errMsg: action.payload
      };
    case DELETE_ITEM:
      let listNameDel = action.payload[0];
      let index = action.payload[1];
      let updatedList = state[listNameDel].filter((item, i) => i !== index);

      return {
        ...state,
        [listNameDel]: updatedList
      };
    case DUPLICATE_ITEM:
      let ListName = action.payload[0];
      let item = action.payload[1];

      return {
        ...state,
        [ListName]: [item, ...state[ListName]]
      };
    default:
      return state;
  }
};
