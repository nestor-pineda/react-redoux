const initialAccount = 0;

const accountReducer = (state = initialAccount, action) => {
  switch (action.type) {
    case "DEPOSITE":
      return state + action.payload;
    case "WITHDRAW":
      return state - action.payload;
    default:
      return state;
  }
};

export default accountReducer;
