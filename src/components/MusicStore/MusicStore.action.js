export const FETCH_STORE_DATA_BEGIN    = "FETCH_STORE_DATA_BEGIN";
export const FETCH_STORE_DATA_SUCCEED = "FETCH_STORE_DATA_SUCCEED";
export const FETCH_STORE_DATA_FAILED = "FETCH_STORE_DATA_FAILED";

export const fetchStoreData = () => {
  const API = "https://raw.githubusercontent.com/almogbhl/junior-frontend-challenge-summer-2019/master/data.json";

  return dispatch => {
    dispatch({ type: FETCH_STORE_DATA_BEGIN });
    fetch(API)
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: FETCH_STORE_DATA_SUCCEED,
          payload: res
        });
      })
      .catch(err =>
        dispatch({
          type: FETCH_STORE_DATA_FAILED,
          payload: err
        })
      );
  };
};