import React, { useState } from "react";
import TopHeader from "../components/TopHeader";
import Tabs from "../components/Tabs";
import Banner from "../components/Banner";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [active, setActive] = useState(1);

  //const [showModal, setShowModal] = useState(false);

  return (
    <>
      <TopHeader toggle={toggle} />
      <Banner />
      <Tabs active={active} setActive={setActive} />
    </>
  );
};

export default Main;
