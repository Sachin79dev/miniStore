import React, { useContext } from "react";
import { MyStore } from "../context/MyECommerce";

const Navbar = () => {
  let { setToggle } = useContext(MyStore);

  return (
    <div>
      <nav className="bg-blue-900 text-white px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">MyStore</h1>

          <ul className="flex gap-8 items-center">
            <li
              onClick={() => setToggle(false)}
              className="hover:text-gray-200 cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => setToggle(true)}
              className="hover:text-gray-200 cursor-pointer"
            >
              Cart
            </li>
          </ul>

          <ul className="flex gap-8 items-center">
            <li>
              <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 cursor-pointer">
                Login
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
