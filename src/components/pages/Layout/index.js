// The page component is the biggest component and holds one or several blocks.
import React from "react";
import "./layout.style.css";

import Bem from "../../blocks/layout/Bem";

const Layout = () => {
  return (
    <section className="layout">
      <Bem />
    </section>
  );
};

export default Layout;