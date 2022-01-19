import React from "react";

import { Route, Routes } from "react-router-dom";
import Chat from "./pages/Chat";
import Join from "./pages/Join";

function App() {
  return (
    <div className="h-full">
      <Routes>
        <Route path="/" element={<Join />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
