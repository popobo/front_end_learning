import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.compoent";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = formFields;
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
    } catch (e) {
      if (e.code === "auth/email-already-in-use") {
        alert("Email already in use");
        console.log("Email already in use", e);
      }
      console.log("User creation", e);
    }
    // const createdAt = new Date();
  };

  return (
    <div>
      <h1>Sign Up with you email and password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          inputOptions={{
            name: "displayName",
            value: displayName,
            handleChange: handleChange,
            required: true,
          }}
        />

        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            name: "email",
            value: email,
            handleChange: handleChange,
            required: true,
          }}
        />

        <FormInput
          label="Password"
          inputOptions={{
            type: "password",
            name: "password",
            value: password,
            handleChange: handleChange,
            required: true,
          }}
        />

        <FormInput
          label="Confirm Password"
          inputOptions={{
            type: "password",
            name: "confirmPassword",
            value: confirmPassword,
            handleChange: handleChange,
            required: true,
          }}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
