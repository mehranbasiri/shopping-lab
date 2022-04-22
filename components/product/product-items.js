import axios from "axios";
const apiAddress = "http://localhost:5000/products/";
export const productService = {
  //for Home
  getProduct: (q = "") => {
    return axios.get(apiAddress + q);
  },
  //For Detail
  getProductById: (id) => {
    return axios.get(apiAddress + id);
  },
  addComment: (productId, comment) =>
    axios.post(apiAddress + productId + "/comments", comment),
  getComments: (productId) => axios.get(apiAddress + productId + "/comments"),
};
