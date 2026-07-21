import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">ShopEasy</h2>

      <input type="text" placeholder="Search for products..." />

      <button className="cart-btn">🛒 Cart</button>
    </nav>
  );
}

export default Navbar;