import React from "react";
import Footer from "../Molecules/Footer";
import Nav from "../Organism/Nav";

const PageLayout = ({ children }) => {
  return (
    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
