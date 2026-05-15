import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const notify = () => {
    const email = document.querySelector("input[type='text']").value;
    const password = document.querySelector("input[type='password']").value;
    if (email === "" && password === "") {
      toast.error("Please Enter Your Email Id and Password");
    } else if (email === "") {
      toast.error("Please Enter Your Email Id");
    } else if (password === "") {
      toast.error("Please Enter Your Password");
    } else {
      toast.success("Login Successfully");
    }
    console.log("Login");
    
  };
  return (
    <>
      <div>
        <h1>Please Login</h1>
        <input type="text" placeholder="Please Enter Your Email Id" />
        <input type="password" placeholder="password" />
        <p>
          dont have account please <Link to="/register">Register </Link> here
        </p>
          <Link> Forget Password ??  </Link>
        <button onClick={notify}>login</button>
      </div>
    </>
  );
};

export default Login;
