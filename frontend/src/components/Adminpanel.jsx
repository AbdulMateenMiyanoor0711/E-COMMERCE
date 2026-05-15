const Adminpanel = () => {
  return (
    <div>
      <h1>Welcome to the admin panel.</h1>
      <p> Here you can manage your application.</p>
      <select name="filter" id="">
        <option value="seller">Sellers</option>
        <option value="customer">Customers</option>
      </select>
    </div>
  );
};

export default Adminpanel;
