import React from "react";
import "./structure.style.css";

import General from "../../blocks/structure/General";
import Top from "../../blocks/structure/Top";
import Mid from "../../blocks/structure/Mid";
import Quicknav from "../../elements/Quicknav";

const Structure = () => {
  const quicknavItems = [
    {
      id: "structure__general",
      content: "General"
    },
    {
      id: "structure__top",
      content: "Components"
    },
    {
      id: "structure__mid",
      content: "Other folders"
    }
  ];
  return (
    <section className="structure">
      <Quicknav items={quicknavItems}/>
      <General />
      <Top />
      <Mid />
    </section>
  );
};

export default Structure;
