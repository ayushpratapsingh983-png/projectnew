import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>ShopEasy</h3>
          <p>Your one-stop shop for all your needs.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Cart</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li>Help Center</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <p>Facebook | Instagram | Twitter</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 ShopEasy | Created by Ayush Pratap Singh</p>
      </div>
    </footer>
  );
}

export default Footer;