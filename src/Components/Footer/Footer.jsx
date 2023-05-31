import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="subscribe">
        <form>
          <input type="email" placeholder="Email address" />
          <button>Subscribe</button>
        </form>
      </div>
      <div className="footer-details">
        <div className="detail">
          <p>+490678000</p>
          <p>agie-decor.com</p>
          <p>find a store</p>
        </div>
        <div className="detail">
          <p>contact us</p>
          <p>shipping</p>
          <p>returns</p>
        </div>
        <div className="detail">
          <p>about us</p>
          <p>careers</p>
          <p>privacy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
