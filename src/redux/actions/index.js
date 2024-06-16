// for adding item to cart
export const addItem = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

// for deleting item to cart
export const delItem = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
