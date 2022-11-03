import { RiDeleteBin3Line } from "react-icons/ri";

const Transactions = ({ tran, onRemove }) => {
  return (
    <div
      className="content-history__text"
      key={tran.data.id}
      style={{
        borderRight: `8px solid ${
          tran.data.category === "درآمد"
            ? "#2146c7"
            : "#FFCD56" && tran.data.category === "هزینه"
            ? "#d9376e"
            : "#FFCD56"
        }`,
      }}
    >
      <div>{tran.data.title}</div>
      <span onClick={onRemove}>
        <RiDeleteBin3Line />
      </span>
    </div>
  );
};

export default Transactions;
