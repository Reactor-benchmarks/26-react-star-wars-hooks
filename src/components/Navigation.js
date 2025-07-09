import React from 'react';
import { navItems } from "../utils/constants";
import NavItem from "./NavItem";
const Navigation = ({
  changePage
}) => {
  console.log(window.globalCount++);
  return <nav className="fixed-top mt-1 ms-5">
            <ul className="nav">
                {navItems.map(item => {
        console.log(window.globalCount++);
        return <NavItem key={item} itemTitle={item} changePage={changePage} />;
      })}
            </ul>
        </nav>;
};
export default Navigation;