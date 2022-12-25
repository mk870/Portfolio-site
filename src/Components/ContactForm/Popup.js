import React, { useEffect } from "react";
import { PopupStyles } from "./PopupStyles";

const Popup = ({ message, close }) => {
  useEffect(() => {
    setTimeout(() => {
      close(false);
    }, 4000);
  }, []);

  if (message === "sent") {
    return (
      <PopupStyles>
        <h3>Email was sent successfully...</h3>
      </PopupStyles>
    );
  } else {
    return (
      <PopupStyles>
        <h3>Failed to send email, please try again...</h3>
      </PopupStyles>
    );
  }
};

export default Popup;
