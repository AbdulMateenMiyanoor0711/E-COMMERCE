import { toast } from "react-toastify";
const Selleronboard = () => {
  const notify = () => {
    const buisnessname = document.querySelector("input[type='text']").value;
    const buisnessemail = document.querySelector("input[type='email']").value;
    const buisnessphone = document.querySelector("input[type='number']").value;
    const buisnessaddress = document.querySelector("input[type='text']").value;
    const gstnumber = document.querySelector("input[type='text']").value;
    const pannumber = document.querySelector("input[type='text']").value;
    const accountholdername =
      document.querySelector("input[type='text']").value;
    const bankname = document.querySelector("input[type='text']").value;
    const repeataccountnumber = document.querySelector(
      "input[type='number']",
    ).value;
    const accountnumber = document.querySelector("input[type='number']").value;
    const ifscCode = document.querySelector("input[type='text']").value;
    const branchname = document.querySelector("input[type='text']").value;
    const upiid = document.querySelector("input[type='text']").value;
    const description = document.querySelector("input[type='text']").value;
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
        <input type="text" placeholder="buisness name" />
        <input type="email" placeholder="buisness email" />
        <input type="number" placeholder="buisness phone number" />
        <input type="text" placeholder="buisness address" />
        <input type="text" placeholder="gst number" />
        <input type="text" placeholder="pan number" />
        <input type="text" placeholder="account holder name" />
        <input type="text" placeholder="bank name  " />
        <input type="number" placeholder="   account number" />
        <input type="number" placeholder="repeat account number" />
        <input type="text" placeholder="ifsc code" />
        <input type="text" placeholder="branch name  " />
        <input type="text" placeholder="upi id  " />
        <input type="text" placeholder="description  " />
        <input type="file" accept="image/*" placeholder="upload logo here" />
        <button onClick={notify}>Submit All details</button>
      </form>
    </>
  );
};

export default Selleronboard;
