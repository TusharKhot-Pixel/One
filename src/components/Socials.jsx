import React from "react";

//import icons

import {
  ImFacebook,
  ImTwitter,
  ImInstagram,
  ImPinterest,
  ImYoutube,
} from "react-icons/im";

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4">
        <li className="hover:scale-150 hover:text-yellow-500 duration-300">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <ImFacebook />
          </a>
        </li>
        <li className="hover:scale-150 hover:text-yellow-500 duration-300">
          <a href="https://www.pinterest.com" target="_blank" rel="noreferrer">
            <ImPinterest />
          </a>
        </li>
        <li className="hover:scale-150 hover:text-yellow-500 duration-300">
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <ImTwitter />
          </a>
        </li>
        <li className="hover:scale-150 hover:text-yellow-500 duration-300">
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
            <ImYoutube />
          </a>
        </li>
        <li className="hover:scale-150 hover:text-yellow-500 duration-300">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <ImInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
