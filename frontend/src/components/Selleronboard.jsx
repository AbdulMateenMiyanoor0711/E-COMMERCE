import { toast } from "react-toastify";
const Selleronboard = () => {
  const notify = () => {
    const buisnessname = document.querySelector("input[type='name']").value;
    const buisnessemail = document.querySelector("input[type='email']").value;
    const buisnessphone = document.querySelector("input[type='number']").value;
    const buisnessaddress = document.querySelector("input[type='address']").value;
    const gstnumber = document.querySelector("input[type='gst']").value;
    const pannumber = document.querySelector("input[type='pan']").value;
    const accountholdername =
      document.querySelector("input[type='accountholdername']").value;
    const bankname = document.querySelector("input[type='bankname']").value;
    const accountnumber = document.querySelector("input[type='accountnumber']").value;
    const repeataccountnumber = document.querySelector(
      "input[type='repeataccountnumber']",
    ).value;
    const ifscCode = document.querySelector("input[type='ifscCode']").value;
    const branchname = document.querySelector("input[type='branchname']").value;
    const upiid = document.querySelector("input[type='upiid']").value;
    const description = document.querySelector("input[type='description']").value;
    const logourl = document.querySelector("input[type='url']").value;

    if (
      buisnessname === "" &&
      buisnessemail === "" &&
      buisnessphone === "" &&
      buisnessaddress === "" &&
      gstnumber === "" &&
      pannumber === "" &&
      accountholdername === "" &&
      bankname === "" &&
      repeataccountnumber === "" &&
      accountnumber === "" &&
      ifscCode === "" &&
      branchname === "" &&
      upiid === "" &&
      description === "" &&
      logourl === ""
    ) {
      toast.error("Fill All Credentials");
    } else {
      toast.success("All details submitted successfully");
    }
    
  };
  return (
    <>
      <h1>please Enter details to verify your identity as seller</h1>
      <form action="">
        <input type="name" placeholder="buisness name" />
        <input type="email" placeholder="buisness email" />
        <input type="number" placeholder="buisness phone number" />
        <input type="address" placeholder="buisness address" />
        <input type="gst" placeholder="gst number" />
        <input type="pan" placeholder="pan number" />
        <input type="name" placeholder="account holder name" />
        <input type="bankname" placeholder="bank name  " />
        <input type="accountnumber" placeholder="   account number" />
        <input type="repeataccountnumber" placeholder="repeat account number" />
        <input type="ifscCode" placeholder="ifsc code" />
        <input type="branchname" placeholder="branch name  " />
        <input type="upiid" placeholder="upi id  " />
        <input type="description" placeholder="description  " />
        <input type="url" placeholder="upload logo here" />
        <button onClick={notify}>Submit All details</button>
      </form>
    </>
  );
};

export default Selleronboard;
