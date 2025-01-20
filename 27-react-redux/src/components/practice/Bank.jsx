import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "../../store/module/bankReducer";

export default function Bank() {
  const [money, setMoney] = useState(0);
  const dispatch = useDispatch();
  const bank = useSelector((state) => state.bank);
  return (
    <>
      <h2>코딩온 은행</h2>
      <h4>잔액 : {bank}원</h4>
      <input
        type="number"
        value={money}
        step={10000}
        onChange={(e) => {
          setMoney(Number(e.target.value));
        }}
      />
      <button
        onClick={() => {
          dispatch(deposit(money));
        }}
      >
        {" "}
        입금
      </button>
      <button
        onClick={() => {
          dispatch(withdraw(money));
        }}
      >
        출금
      </button>
    </>
  );
}
