import React, { useState } from "react";
import GridBox from "./components/gridBox/gridBox";
import FlexBox from "./components/flexBox/flexBox";
import Position from "./components/position/position";
import Animation from "./components/animation/animation";
import { ReactLifecycle1 } from "./components/reactLifecycle/reactLifecycle1";
import ReactLifeCycle2 from "./components/reactLifecycle/reactLifeCycle2";

function App() {
  const [activeTab, setActiveTab] = useState("");
  const renderActiveTab = () => {
    switch (activeTab) {
      case "grid":
        return <GridBox />;
      case "flex":
        return <FlexBox />;
      case "position":
        return <Position />;
      case "animation":
        return <Animation />;
      case "ReactLifecycle1":
        return <ReactLifecycle1 />;
      default:
        return <ReactLifeCycle2 />;
    }
  };
  return (
    <div className="app">
      <h1>CodeStoke</h1>
      <div className="tabs">
        <button onClick={() => setActiveTab("grid")}>Grid</button>
        <button onClick={() => setActiveTab("flex")}>Flex</button>
        <button onClick={() => setActiveTab("position")}>Position</button>
        <button onClick={() => setActiveTab("animation")}>Animation</button>
      </div>
      <div className="content">{renderActiveTab()}</div>
    </div>
  );
}
export default App;
