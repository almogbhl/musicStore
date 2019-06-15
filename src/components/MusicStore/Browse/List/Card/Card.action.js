export const DELETE_ITEM = "DELETE_ITEM";
export const DUPLICATE_ITEM = "DUPLICATE_ITEM";

export const deleteItem = (list, index) => {
  let listName = list;

  if (list === "Vinyl Records") {
    listName = "vinyl_records";
  } else {
    listName = "cds";
  }

  return {
    type: DELETE_ITEM,
    payload: [listName, index]
  };
};

export const duplicateItem = (list, item) => {
  let listName = list;

  if (list === "Vinyl Records") {
    listName = "vinyl_records";
  } else {
    listName = "cds";
  }

  return {
    type: DUPLICATE_ITEM,
    payload: [listName, item]
  };
};
