import React, { useState } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Toastify from "toastify";
import { useDispatch } from "react-redux";
import {
  resetLimit,
  updateLimitLocalstorage,
} from "../store/actions/limitAction";

const AddLimit = () => {
  const [limit, setLimit] = useState("");
  const dispatch = useDispatch();
  //const { limit } = useSelector((state) => state.limit, shallowEqual);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const limitAmount = limit;
    dispatch(resetLimit(limitAmount));
    dispatch(updateLimitLocalstorage());
    Toastify.success("Limit set succesfully");
    setLimit("");
  };

  return (
    <div className="container-fluid border m-3 p-3">
      <div className="row  m-1 border">
        <Header />
      </div>
      <div className="row">
        <div className="col-md-3 ">
          <Menu />
        </div>

        <div className="col-md-9">
          <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <h2>SET LIMIT</h2>

            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                id="exampleInputEmail1"
                placeholder=" Enter amount"
                value={limit}
                onChange={(e) => setLimit(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddLimit;
