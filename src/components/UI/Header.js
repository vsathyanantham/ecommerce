import React from "react";
import "./Header.css";
import TopHeader from "./TopHeader";
import Search from "../Products/Search";
const Header = React.memo((props) => {
  return (
    <>
      <div className="super_container">
        <TopHeader />
        <Search />
      </div>
    </>
  );
});

export default Header;
