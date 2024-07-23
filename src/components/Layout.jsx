import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="font-mont">
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}
