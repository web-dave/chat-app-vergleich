import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Home from "./components/Home";
import socketIO from "socket.io-client";

const ChatPage = React.lazy(() => import("./components/ChatPage"));
const socket = socketIO.connect("http://localhost:4000");
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<>...</>}>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<>...</>}>
                <Home socket={socket} />
              </Suspense>
            }
          ></Route>
          <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
