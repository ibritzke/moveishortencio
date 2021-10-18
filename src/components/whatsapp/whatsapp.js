import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import "./whatsapp.css";

export const Whatsapp = () => {
  return (
    <div className="fab">
      <a
        href="https://api.whatsapp.com/send?phone=55123456789"
        alt="whatsapp"
        title="Whatsapp"
      >
        <IoLogoWhatsapp  />
      </a>
    </div>
  );
};
