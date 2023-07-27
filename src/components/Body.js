import React from "react";
import { Link, Outlet } from "react-router-dom";

const Body = () => {
  return (
    <React.Fragment>
      <div className="p-4 shadow-md flex justify-between bg-teal-700 text-white">
        <div className="col-span-4 font-bold">Frontend Machine Coding</div>
        <div className="col-span-8">
          <ul className="flex space-x-3">
            <Link to="/">
              <li className="cursor-pointer hover:font-semibold">
                Nested Comments
              </li>
            </Link>
            <Link to="/modal">
              <li className="cursor-pointer hover:font-semibold">
                Modal Component
              </li>
            </Link>
            <Link to="/tab">
              <li className="cursor-pointer hover:font-semibold">
                Tab Component
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
