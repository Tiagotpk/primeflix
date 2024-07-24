import Footer from "./Footer";
import Header from "./Header";
import PropTypes from "prop-types";

export default function Layout({ children }) {
  return (
    <div className="font-mont min-h-screen flex flex-col">
      <Header />
      <div className="content flex-grow">{children}</div>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}