//import useState hook to create menu collapse state
import React, { useState } from "react";
import PanelMenuDemo from "../panelMenu/PanelMenu";

// import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./SideBar.css";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { useSelector } from "react-redux";

const SideBar = () => {
  
  const tokenHolder = useSelector((state) => {
    return {
      token: state.tokenReducer.token,
    };
  });
  const [visibleLeft, setVisibleLeft] = useState(false);
  return (
    tokenHolder.token.length&&<div
      // style={{visibility:( tokenHolder.token.length !=0) ? "visable" : "hidden"}}
    >
      <div className="card1">
        <Sidebar
          style={{
            width: "385px",
            backgroundColor: "#574B8A",

          }}
          visible={visibleLeft}
          onHide={() => setVisibleLeft(false)}
        >
          <PanelMenuDemo />
        </Sidebar>

        <Button
          style={{ backgroundColor: "transparent", border: "none" }}
          icon="pi pi-align-center"
          iconPos="right"
          onClick={() => setVisibleLeft(true)}
        />
      </div>
    </div>
  );
};

export default SideBar;
