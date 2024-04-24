import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const Header = () => {
  const selectedOption = useSelector((state) => state.selectedOption);
  return (
    <header className="flex items-center justify-between h-20 px-5 py-2 bg-blue-600 text-white">
      <div className="w-1/5 flex items-center">
        <FontAwesomeIcon icon={faFacebook} />
      </div>
      <div className="flex flex-row w-4/5 justify-between">
        <div>{selectedOption}</div>
        <div className="flex justify-end items-center">
          <FontAwesomeIcon icon={faUser} className="mr-2" />
        </div>
      </div>
    </header>
  );
};

export default Header;
