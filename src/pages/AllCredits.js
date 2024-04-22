import React from "react";
import Menu from "../components/Menu";
import Header from "../components/Header";
import { shallowEqual, useSelector } from "react-redux";
import calcTotal from "../components/calcTotal";
import Credits from "../components/Credits";

const AllCredits = () => {
  const { credits } = useSelector((state) => state.credit, shallowEqual);

  return (
    <div className="container-fluid border m-3 p-3">
      <div className="row  mt-1 border">
        <Header />
      </div>
      <div className="row">
        <div className="col m-2 ">
          <Menu />
        </div>

        <div className="col-md-9">
          {credits &&
            credits.map((item) => <Credits key={item.id} {...item} />)}
        </div>
      </div>

      <div className="row total-title">
        <h4 className="total_title">
          Total Credit:
          <span className="total-expenses"> {calcTotal(credits)}</span>
        </h4>
      </div>
      <div className="row total-title">
        <h4>npm run build</h4>
      </div>
    </div>
  );
};

export default AllCredits;
