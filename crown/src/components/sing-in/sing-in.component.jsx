import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, singInWithGoogle } from "../../firebase/firebase.utils";
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

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (err) {
      console.log(err);
    }
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
            <CustomButton
              type="button"
              onClick={singInWithGoogle}
              isGoogleSingIn
            >
              Sing in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SingIn;
