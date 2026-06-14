import { useState } from "react";
import { toast } from "react-toastify";

const Selleronboard = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    gst: "",
    pan: "",
    accountholdername: "",
    bankname: "",
    accountnumber: "",
    repeataccountnumber: "",
    ifscCode: "",
    branchname: "",
    upiid: "",
    description: "",
    logourl: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const fields = [
      [form.name, "Business Name"],
      [form.email, "Business Email"],
      [form.phone, "Business Phone"],
      [form.address, "Business Address"],
      [form.gst, "GST Number"],
      [form.pan, "PAN Number"],
      [form.accountholdername, "Account Holder Name"],
      [form.bankname, "Bank Name"],
      [form.accountnumber, "Account Number"],
      [form.repeataccountnumber, "Confirm Account Number"],
      [form.ifscCode, "IFSC Code"],
      [form.branchname, "Branch Name"],
      [form.upiid, "UPI ID"],
      [form.description, "Description"],
      [form.logourl, "Logo"],
    ];

    for (const [value, label] of fields) {
      if (!value) {
        toast.error(`Please Enter Your ${label}`);
        return false;
      }
    }

    if (form.accountnumber !== form.repeataccountnumber) {
      toast.error("Account Numbers do not match");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch("http://localhost:5000/api/seller/onboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Seller details submitted successfully");
      } else {
        toast.error(data.message || "Submission failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error. Try again.");
    }
  };

  return (
    <>
      <h1>Enter details to verify your identity as seller</h1>
      <form onSubmit={handleSubmit}>
        
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Business Name"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Business Email"
        />
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Business Phone"
        />
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Business Address"
        />
        <input
          type="text"
          name="gst"
          value={form.gst}
          onChange={handleChange}
          placeholder="GST Number"
        />
        <input
          type="text"
          name="pan"
          value={form.pan}
          onChange={handleChange}
          placeholder="PAN Number"
        />
        <input
          type="text"
          name="accountholdername"
          value={form.accountholdername}
          onChange={handleChange}
          placeholder="Account Holder Name"
        />
        <input
          type="text"
          name="bankname"
          value={form.bankname}
          onChange={handleChange}
          placeholder="Bank Name"
        />
        <input
          type="text"
          name="accountnumber"
          value={form.accountnumber}
          onChange={handleChange}
          placeholder="Account Number"
        />
        <input
          type="text"
          name="repeataccountnumber"
          value={form.repeataccountnumber}
          onChange={handleChange}
          placeholder="Repeat Account Number"
        />
        <input
          type="text"
          name="ifscCode"
          value={form.ifscCode}
          onChange={handleChange}
          placeholder="IFSC Code"
        />
        <input
          type="text"
          name="branchname"
          value={form.branchname}
          onChange={handleChange}
          placeholder="Branch Name"
        />
        <input
          type="text"
          name="upiid"
          value={form.upiid}
          onChange={handleChange}
          placeholder="UPI ID"
        />
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          type="text"
          name="logourl"
          value={form.logourl}
          onChange={handleChange}
          placeholder="Logo URL"
        />

        <button type="submit">Submit All Details</button>
      </form>
    </>
  );
};

export default Selleronboard;
