export const ADD_TO_CART = "[PRODUCT] ADD-TO-CARD";
export const REMOVE_FROM_CART = "[PRODUCT] REMOVE-FROM-CART";
export const addToCart = (product) => {
  return { type: ADD_TO_CART, payload: product };
};

export const removeFromCart = (product) => {
  return { type: REMOVE_FROM_CART, payload: product };
};
