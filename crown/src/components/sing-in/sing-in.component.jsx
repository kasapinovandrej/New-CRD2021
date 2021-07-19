import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { singInWithGoogle } from "../../firebase/firebase.utils";
import "./sing-in.styles.scss";

class SingIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  inputHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div className="sing-in">
        <h2 className="title">I already have an account</h2>
        <span>Sing in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.inputHandler}
            label="email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.inputHandler}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sing in</CustomButton>
            <CustomButton onClick={singInWithGoogle} isGoogleSingIn>
              Sing in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SingIn;