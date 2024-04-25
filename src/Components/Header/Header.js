import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import dots from "../../assets/dots-menu.png";
import logo from "../../assets/logoverbiz.png";

const Header = () => {
  const selectedOption = useSelector((state) => state.selectedOption);
  return (
    <header
      className="flex items-center justify-end h-20 px-5 py-2 bg-customblue
    text-white"
    >
      <div className="mr-20">
        <img src={logo} />
      </div>
      <div className="mx-2">
        <img className="w-10 h-10  filter invert p-1 " src={dots} />
      </div>
      <div className="flex flex-row w-4/5 justify-between">
        <div className=" text-3xl  font-bold ">{selectedOption}</div>
        <div className="flex justify-end items-center">
          <FontAwesomeIcon icon={faUser} className="mr-2 h-5 w-5" />
        </div>
      </div>
    </header>
  );
};

export default Header;
