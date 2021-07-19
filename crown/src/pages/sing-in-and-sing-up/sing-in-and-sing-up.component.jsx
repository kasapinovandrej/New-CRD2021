import React from "react";
import SingIn from "../../components/sing-in/sing-in.component";
import SingUp from "../../components/sing-up/sing-up.component";
import "./sing-in-and-sing-up.styles.scss";

const SingInAndSingUp = () => {
  return (
    <div className="sing-in-and-sing-up">
      <SingIn />
      <SingUp />
    </div>
  );
};

export default SingInAndSingUp;
