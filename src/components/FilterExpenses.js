import React from "react";
import DisplayFilter from "./DisplayFilter";

const FilterExpenses = ({ filteredArray }) => {
  return (
    <div>
      <div className="card history m-2">
        <div className="card-body">
          {filteredArray.map((item) => (
            <DisplayFilter item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterExpenses;
