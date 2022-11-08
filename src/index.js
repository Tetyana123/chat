import React from "react";

import ReactDom from "react-dom";
import DirectChatPage from "./DirectChatPage";

function App() {
  return <DirectChatPage />;
}
ReactDom.render(<App />, document.getElementById("container"));
