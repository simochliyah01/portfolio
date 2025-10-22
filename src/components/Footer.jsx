import "./Footer.css";

export default function Footer(){
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {year} Mohamed Chliyah. All rights reserved.</p>

      </div>
    </footer>
  );
}
