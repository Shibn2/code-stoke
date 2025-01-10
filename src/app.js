import React, { useCallback, useState } from "react";
import GridBox from "./components/gridBox/gridBox";
import FlexBox from "./components/flexBox/flexBox";
import Position from "./components/position/position";
import Animation from "./components/animation/animation";
import { ReactLifecycle1 } from "./components/reactLifecycle/reactLifecycle1";
import { ReactLifeCycle2 } from "./components/reactLifecycle/reactLifeCycle2";
import LongPollingComponent from "./components/Utilities/longPolling";
import ShortPolling from "./components/Utilities/shortPolling";
import BreakingBad from "./components/breakingBad/breakingBad";
import InputComponentPlaybook from "./components/inputComponentPlaybook/inputComponentPlaybook";
import MemoStudy from "./components/memoStudy/memoStudy";

function App() {
  const [activeTab, setActiveTab] = useState("");
  const renderActiveTab = useCallback(() => {
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
      case "ReactLifecycle1":
        return <ReactLifeCycle2 />;
      case "LongPollingComponent":
        return <LongPollingComponent />;
      case "ShortPolling":
        return <ShortPolling />;
      case "BreakingBad":
        return <BreakingBad />;
      case "InputComponentPlaybook":
        return <InputComponentPlaybook />;
      case "MemoStudy":
        return <MemoStudy />;
      default:
        return "";
    }
  }, [activeTab]);
  return (
    <div className="app">
      <h1>CodeStoke</h1>
      <div className="tabs">
        <button onClick={() => setActiveTab("grid")}>{`Grid`}</button>
        <button onClick={() => setActiveTab("flex")}>{`Flex`}</button>
        <button onClick={() => setActiveTab("position")}>{`Position`}</button>
        <button onClick={() => setActiveTab("animation")}>{`Animation`}</button>
        <button onClick={() => setActiveTab("LongPollingComponent")}>
          {`LongPollingComponent`}
        </button>
        <button onClick={() => setActiveTab("ShortPolling")}>
          {`ShortPolling`}
        </button>
        <button onClick={() => setActiveTab("BreakingBad")}>
          {`BreakingBad`}
        </button>
        <button onClick={() => setActiveTab("InputComponentPlaybook")}>
          {`InputComponentPlaybook`}
        </button>
        <button onClick={() => setActiveTab("MemoStudy")}>{`MemoStudy`}</button>
      </div>
      <div className="content">{renderActiveTab()}</div>
    </div>
  );
}
export default App;
