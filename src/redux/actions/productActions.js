import axios from "axios";
export const getProductDetail = (id) => {
  return (dispatch) => {
    try {
      axios
        .get(`${process.env.REACT_APP_API_ENDPOINT}product/${id}`)
        .then((response) => {
          dispatch({
            type: "GET_PRODUCT_DETAIL",
            data: response.data,
          });
        })
        .catch((err) => {});
    } catch (err) {}
  };
};
