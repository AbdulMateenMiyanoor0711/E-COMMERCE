import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const Registeration = () => {
  const notify = () => {
    const email = document.querySelector("input[type='email']").value;
    const name = document.querySelector("input[type='text']").value;
    const password = document.querySelector("input[type='password']").value;
    const confirmPassword = document.querySelector(
      "input[type='password']",
    ).value;
    if (
      name === "" &&
      password === "" &&
      email === "" &&
      confirmPassword !== ""
    ) {
      toast.error("Fill All Credentials");
    } else if (name === "") {
      toast.error("Please Enter Your Name");
    } else if (email === "") {
      toast.error("Please Enter Your Email Id");
    } else if (password === "") {
      toast.error("Please Enter Your Password");
    } else if (confirmPassword === "") {
      toast.error("Please Enter Your Confirm Password");
    } else {
      toast.success("Register Successfully");
    }
  };

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

        <input type="text" placeholder="Please Enter Your Full Name" />
        <input type="text" placeholder="Please Enter Your Email Id" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="Confirm password" />
        <p>
          already have account please <Link to="/login">login</Link> here
        </p>

        <button onClick={notify}>Register</button>
      </div>
    </>
  );
};

export default Registeration;
