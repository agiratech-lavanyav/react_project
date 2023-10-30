let cart = JSON.parse(localStorage.getItem("cart"));
const initialState = {
  cart: { items: cart?.items || [], total: cart?.total || 0 },
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART":
      const cartToAdd = {
        items: [...state.cart.items, ...action.payload],
        total: state.cart.total + action.total,
      };
      localStorage.setItem("cart", JSON.stringify(cartToAdd));
      return {
        ...state,
        cart: cartToAdd,
      };
    case "REMOVE_CART":
      const cartAfterRemove = {
        items: [...action.payload],
        total: state.cart.total - action.total,
      };
      localStorage.setItem("cart", JSON.stringify(cartAfterRemove));
      return {
        ...state,
        cart: cartAfterRemove,
      };
    case "CLEAR_CART":
      const allCartRemove = {
        items: [],
        total: 0,
      };
      localStorage.setItem("cart", JSON.stringify(allCartRemove));
      return {
        ...state,
        cart: allCartRemove,
      };
    default:
      return state;
  }
};

export default cartReducer;
