//action type의
const WITHDRAW = "withdraw";
const DEPOSIT = "deposit";

//action 리턴 함수
const account = 0;
export const deposit = (payload) => ({
  type: DEPOSIT,
  payload: payload,
});
export const withdraw = (payload) => ({
  type: WITHDRAW,
  payload: payload,
});
export const bankReducer = (state = account, action) => {
  switch (action.type) {
    case DEPOSIT:
      return state + action.payload;
    case WITHDRAW:
      return state - action.payload;
    default:
      return state;
  }
};
