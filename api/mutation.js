const { default: axios } = require("axios");

export const deleteProduct = (id) => {
  return axios
    .delete(`https://dummyjson.com/products/${id}`)
    .then((res) => console.log("res", res));
};
