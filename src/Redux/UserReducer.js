const initialState = {
    users: JSON.parse(localStorage.getItem("users")) || [],
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SIGNUP_USER":
        return {
          ...state,
          users: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;