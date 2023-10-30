const initialState = {
  isAuthenticated:
    localStorage.getItem("autheticate") === "true" ? true : false,
  user: JSON.parse(localStorage.getItem("loggedIn")) || {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("autheticate", true);
      return {
        isAuthenticated: true,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
