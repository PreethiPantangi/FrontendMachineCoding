import React from "react";
import { Link, Outlet } from "react-router-dom";

const Body = () => {
  return (
    <React.Fragment>
      <div className="p-4 shadow-md grid grid-flow-col">
        <div className="col-span-4 font-bold">Frontend Machine Coding</div>
        <div className="col-span-8">
          <ul className="flex space-x-3">
            <Link to="/">
              <li className="cursor-pointer hover:font-semibold">
                Nested Comments
              </li>
            </Link>
            <Link to="/starRating">
              <li className="cursor-pointer hover:font-semibold">
                Star Rating
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <Outlet />
    </React.Fragment>
  );
};

export default Body;
