import {  useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const Registeration = () => {
  const passwordcheck = () => {
    const password = document.querySelector("input[type='password']").value;
    const confirmPassword = document.querySelector(
      "input[type='confirmpassword']",
    ).value;
    if (password === "") {
      toast.error("Please Enter Your Password");
      return false;
    } else if (confirmPassword === "") {
      toast.error("Please Enter Your Confirm Password");
      return false;
    } else if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    }
    return true;
  };

  async function register() {
    try {
      const addUser = await fetch("http://localhost:5000/add-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: document.querySelector("input[type='name']").value,
          email: document.querySelector("input[type='email']").value,
          number: document.querySelector("input[type='number']").value,
          password: document.querySelector("input[type='password']").value,
          confirmPassword: document.querySelector(
            "input[type='confirmpassword']",
          ).value,
          status: document.querySelector("select[name='status']").value,
        }),
      });
      console.log("Added Succesfully", addUser);

      toast.success("Register Successfully");
    } catch (error) {
      toast.error("Error registering user:", error);
    }
  }
  const notify = () => {
    const email = document.querySelector("input[type='email']").value;
    const name = document.querySelector("input[type='name']").value;
    const number = document.querySelector("input[type='number']").value;
    const password = document.querySelector("input[type='password']").value;
    const confirmPassword = document.querySelector(
      "input[type='confirmpassword']",
    ).value;
    if (
      name === "" &&
      password === "" &&
      email === "" &&
      number === "" &&
      confirmPassword !== ""
    ) {
      toast.error("Fill All Credentials");
    } else if (name === "") {
      toast.error("Please Enter Your Name");
    } else if (email === "") {
      toast.error("Please Enter Your Email Id");
    } else if (number === "") {
      toast.error("Please Enter Your Phone Number");
    } else if (password === "") {
      toast.error("Please Enter Your Password");
    } else if (confirmPassword === "") {
      toast.error("Please Enter Your Confirm Password");
    }
    console.log("Register");
  };
  useEffect(() => {
    if (passwordcheck()) {
      register();
    }
  }, []);
  return (
    <>
      <div>
        <h4>
          Register Here as
          <select name="status" id="">
            <option value="seller">seller</option>
            <option value="customer">customer</option>
          </select>
        </h4>

        <input type="name" placeholder="Please Enter Your Full Name" />
        <input type="email" placeholder="Please Enter Your Email Id" />
        <input type="number" placeholder="Phone Number" />
        <input type="password" placeholder="password" />
        <input type="confirmpassword" placeholder="Confirm password" />
        <p>
          already have account please <Link to="/login">login</Link> here
        </p>

        <button onClick={() => notify() && passwordcheck()}>Register</button>
      </div>
    </>
  );
};

export default Registeration;
