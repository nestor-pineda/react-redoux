import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { accountActionCreators } from "../state/index";

const Bank = () => {
  // const state = useSelector((state) => state);
  // console.log(state);

  const account = useSelector((state) => state.account);
  console.log(account);

  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(accountActionCreators, dispatch);

  return (
    <div>
      <h1>Account money: {account}</h1>
      <button onClick={() => depositMoney(50)}>+</button>
      <button onClick={() => withdrawMoney(50)}>-</button>
    </div>
  );
};

export default Bank;
