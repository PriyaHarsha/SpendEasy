import React from "react";
import Menu from "../components/Menu";
import Header from "../components/Header";
import ExpenseDisplayCard from "../components/ExpenseDisplayCard";
import { useSelector, shallowEqual } from "react-redux";
import ExpenseHistory from "../components/ExpenseHistory";
import getcategories from "../category";
import ExpenseChart from "../components/ExpenseChart";

const categories = getcategories;

const Dashboard = () => {
  const { expenses } = useSelector((state) => state.expense, shallowEqual);
  const { credits } = useSelector((state) => state.credit, shallowEqual);

  let historyList = [...expenses, ...credits];
  historyList = historyList.sort((p1, p2) =>
    p1.id < p2.id ? 1 : p1.id > p2.id ? -1 : 0
  );

  if (historyList.length > 4) {
    historyList = historyList.slice(0, 4);
  }

  return (
    <div className="container-fluid border m-3 p-3 ">
      <div className="row mt-1 border">
        <Header />
      </div>
      <div className="row">
        <div className="col m-2 ">
          <Menu />
        </div>

        <div className="col-md-6 d-flex flex-direction-column flex-wrap justify-content-center m-0 p-0">
          <div className="row" style={{ width: "40vw" }}>
            <div className="conatiner-fluid gap-20 m-4 p-0">
              <div className="row card-conatiner">
                {expenses &&
                  categories.map((item) => (
                    <ExpenseDisplayCard
                      key={item.id}
                      item={item}
                      expensesArray={expenses}
                    />
                  ))}
              </div>
            </div>
          </div>

          <div className="row d-flex justify-content-center">
            <div className="col">
              {expenses.length > 0 ? <ExpenseChart /> : <h3>No data found</h3>}
            </div>
          </div>
        </div>
        <div className="col col-lg-3 border text-center">
          <div>
            <h4 className="history-title m-2">Transaction History</h4>
          </div>
          {historyList &&
            historyList.map((item) => (
              <ExpenseHistory key={item.id} {...item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
