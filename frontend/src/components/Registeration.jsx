import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Registeration = () => {
  const navigate = useNavigate();
  const [form, setform] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
    status: "customer",
  });

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  

  const validate = () => {
    const { name, email, number, password, confirmPassword } = form;
    if (!name) {
      toast.error("Please Enter Your Full Name");
      return false;
    } else if (!email) {
      toast.error("Please Enter Your Email Id");
      return false;
    } else if (!number) {
      toast.error("Please Enter Your Phone Number");
      return false;
    } else if (!password) {
      toast.error("Please Enter Your Password");
      return false;
    } else if (!confirmPassword) {
      toast.error("Please Enter Your Confirm Password");
      return false;
    } else if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    try {
      const response = await fetch("http://localhost:5000/api/auth/add-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.number,
          password: form.password,
          role: form.status,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success("User registered successfully");
        navigate("/login");
      } else {
        toast.error(data.msg || "Error registering user");
      }
    } catch (error) {
      toast.error("An error occurred while registering the user", error);
    }
  };
 
  return (
    <>
      <div>
        <h4>
          Register Here as
          <select name="status" id="" value={form.status} onChange={handleChange}>
            <option value="seller">seller</option>
            <option value="customer">customer</option>
          </select>
        </h4>

        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Please Enter Your Full Name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={form.email}
          placeholder="Please Enter Your Email Id"
          onChange={handleChange}
        />
        <input
          type="number"
          name="number"
          value={form.number}
          placeholder="Phone Number"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={form.password}
          placeholder="password"
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          placeholder="Confirm password"
          onChange={handleChange}
        />
        <p>
          already have account please <Link to="/login">login</Link> here
        </p>

        <button onClick={handleSubmit}>Register</button>
      </div>
    </>
  );
};

export default Registeration;
