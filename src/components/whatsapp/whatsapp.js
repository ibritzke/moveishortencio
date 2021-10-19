import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import "./whatsapp.css";
import {Link} from "react-router-dom"

export const Whatsapp = () => {
  return (
    <div className="fab">
      <a href="https://api.whatsapp.com/send?phone=555135711617"
        alt="whatsapp"
        title="Whatsapp"
      >
        <IoLogoWhatsapp  />
      </a>
    </div>
  );
};
