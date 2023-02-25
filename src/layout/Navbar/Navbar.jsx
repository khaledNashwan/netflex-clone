import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/netflix-logo-png-2562.png'
import { FaHeart, FaSearch } from 'react-icons/fa'
import { FiUser } from "react-icons/fi";


const Navbar = () => {
    const hover = "hover:text-subMain transitions text-white";
    const Hover = ({ isActive }) => (isActive ? "text-subMain" : hover);
  return (
    <div className=" shadow-md  z-20 sticky top-0   bg-Main ">
      <div className="container  mx-auto py-6 px-2 lg:grid grid-cols-7 justify-between items-center gap-10">
        <div className="col-span-1 lg:block hidden">
          <Link to="/">
            <img src={logo} alt="logo" className="w-full h-12 object-contain" />
          </Link>
        </div>

        {/*add search */}
        <div className="col-span-3">
          <form className="w-full text:sm rounded bg-dryGray flex-btn gap-4 ">
            <button
              type="submit"
              className=" bg-subMain w-12 h-12 flex-colo rounded "
            >
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="search"
              className="font-medium placeholder:text-border text-sm w-11/12 h-12 bg-transparent bordeer-none px-2 text-black"
            />
          </form>
        </div>

        {/*add menu */}
        <div className="col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center">
          <NavLink to="/moveies" className={Hover}>
            Moveies
          </NavLink>

          <NavLink to="/about" className={Hover}>
            About Us
          </NavLink>

          <NavLink to="/contact" className={Hover}>
            Contact Us
          </NavLink>

          <NavLink to="/login" className={Hover}>
            <FiUser className="w-6 h-6" />
          </NavLink>
          <NavLink to="/favorite" className={`${Hover} relative`}>
            <FaHeart className="w-5 h-5" />
            <div className="w-4 h-4 flex-colo rounded-full text-xs bg-subMain absolute -top-4 -right-1">
              3
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar