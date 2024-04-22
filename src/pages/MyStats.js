import React from "react";
import Menu from "../components/Menu";
import Header from "../components/Header";
import { shallowEqual, useSelector } from "react-redux";
import PaginatedItems from "../components/PaginatedItems";

const MyStats = () => {
  const { expenses } = useSelector((state) => state.expense, shallowEqual);
  const { credits } = useSelector((state) => state.credit, shallowEqual);

  let historyList = [...expenses, ...credits];
  historyList = historyList.sort((p1, p2) =>
    p1.id < p2.id ? 1 : p1.id > p2.id ? -1 : 0
  );
  return (
    <div className="container-fluid border m-3 p-3">
      <div className="row  mt-1 border">
        <Header />
      </div>
      <div className="row">
        <div className="col m-2" style={{ height: "70vh" }}>
          <Menu />
        </div>

        <div className="col-md-9">
          <h1>All Transactions</h1>
          <div id="page">
            <PaginatedItems itemsPerPage={4} historyList={historyList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyStats;
