import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSingIn, ...otherProps }) => {
  return (
    <button
      className={`custom-button ${isGoogleSingIn ? "google-sing-in" : " "}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
