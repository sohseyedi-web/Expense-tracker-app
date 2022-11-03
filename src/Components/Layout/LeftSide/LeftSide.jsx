import "./LeftSide.scss";
import Charts from "./Charts/Charts";
import { comma } from "./../../../utils/Comma";

const LeftSide = ({ transactions }) => {
  const amount = transactions.map((tran) => Number(tran.data.amount));
  const total = amount.reduce((acc, item) => acc + item, 0);

  const items = transactions.map((tran) => tran);
  const invest = items.filter((i) => i.data.category === "درآمد");
  const expense = items.filter((i) => i.data.category === "هزینه");
  const savings = items.filter((i) => i.data.category === "پس انداز");
  let investAmount = invest.map((tran) => Number(tran.data.amount));
  let expenseAmount = expense.map((tran) => Number(tran.data.amount));
  let savingsAmount = savings.map((tran) => Number(tran.data.amount));
  const totalInvest = investAmount.reduce((acc, item) => acc + item, 0);
  const totalExpense = expenseAmount.reduce((acc, item) => acc + item, 0);
  const totalSaving = savingsAmount.reduce((acc, item) => acc + item, 0);

  return (
    <section className="items">
      {total === 0 ? null : (
        <>
          <div className="items-chart">
            <Charts
              invest={totalInvest}
              expense={totalExpense}
              saving={totalSaving}
            />
            <div className="items-chart__data">
              <h5>جمع : </h5>
              <span>{comma(total)} تومان</span>
            </div>
          </div>
          <div className="items-result">
            <div className="items-result__box expense">
              <h5>هزینه</h5>
              <span>{comma(totalExpense)}</span>
            </div>
            <div className="items-result__box invest">
              <h5>درآمد</h5>
              <span>{comma(totalInvest)}</span>
            </div>
            <div className="items-result__box savings">
              <h5>پس انداز</h5>
              <span>{comma(totalSaving)}</span>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default LeftSide;
