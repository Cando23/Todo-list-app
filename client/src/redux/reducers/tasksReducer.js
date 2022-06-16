const defaultState = {
  data: [],
};
export const tasksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "FILTER_LIST":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
