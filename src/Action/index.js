import jsonPlaceHolders from "../apis/jsonplaceholder";

export const fetchPost = async () => {
  const response = await jsonPlaceHolders.get("/posts");
  return {
      type: "FETCH_POST",
      payload:response
      
  };
};
