import React from 'react';
const NavItem = ({
  itemTitle,
  changePage
}) => {
  console.log(window.globalCount++);
  return <li onClick={() => changePage(itemTitle)} className="nav-item btn btn-danger mx-1">{itemTitle}</li>;
};
export default NavItem;