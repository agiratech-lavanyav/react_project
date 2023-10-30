export const signupUser = (userData) => {
  return {
    type: "SIGNUP_USER",
    payload: userData,
  };
};

export const loggedInUser = () => {
  return {
    type: "LOGIN",
  };
};

export const addProductToCart = (product) => {
  const total = product.price; // Calculate the total price
  return {
    type: "ADD_CART",
    payload: [product], // An array of products to add
    total,
  };
};

export const removeProductFromCart = (products, price) => {
  //const total = product.price;
  return {
    type: "REMOVE_CART",
    payload: products,
    total: price,
  }
};

export const removeAllFromCart = () => {
  return {
    type: "CLEAR_CART",
  };
};
