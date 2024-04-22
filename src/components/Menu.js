import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="text-center border menu">
        <div className="list-group">
          <NavLink to="/" className="list-group-item list-group-item-action">
            DASHBOARD
          </NavLink>
          <NavLink
            to="/bills"
            className="list-group-item list-group-item-action"
          >
            PAYMENTS
          </NavLink>
          <NavLink
            to="/expenses"
            className="list-group-item list-group-item-action"
          >
            All EXPENSES
          </NavLink>
          <NavLink
            to="/credits"
            className="list-group-item list-group-item-action "
          >
            ALL CREDITS
          </NavLink>
          <NavLink
            to="/mystats"
            className="list-group-item list-group-item-action "
          >
            MY STATS
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Menu;
