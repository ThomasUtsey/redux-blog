import jsonPlaceHolders from "../apis/jsonplaceholder";

export const fetchPost = () => async dispatch => {
  const response = await jsonPlaceHolders.get("/posts");
  dispatch({
    type: "FETCH_POST",
    payload: response
  });
};
