import { useState } from "react";
import "./App.css";
import FullPage from "./components/Fullpage";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import ChatAI from "./components/ChatPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<FullPage/>}/>
      <Route path='/chat' element={<ChatAI/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
