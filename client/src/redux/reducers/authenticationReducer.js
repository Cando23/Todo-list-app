const defaultState = {
  isAuthenticated: false,
};
export const authenticationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOGOUT":
      return { ...state, isAuthenticated: false };
    case "LOGIN":
      return { ...state, isAuthenticated: true };
    default:
      return state;
  }
};
