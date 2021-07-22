import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isGoogleSingIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`custom-button ${isGoogleSingIn ? "google-sing-in" : " "} ${
        inverted ? "inverted" : " "
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
