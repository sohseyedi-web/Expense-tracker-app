import { useSelector } from "react-redux";
import styled from "styled-components";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";

const Layout = () => {
  const { transactions } = useSelector((state) => state.expense);

  const LAYOUT = styled.section`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 998px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  `;

  return (
    <LAYOUT className="container">
      <RightSide transactions={transactions} />
      <LeftSide transactions={transactions} />
    </LAYOUT>
  );
};

export default Layout;
