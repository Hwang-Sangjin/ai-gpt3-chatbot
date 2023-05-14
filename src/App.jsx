import { useState } from "react";
import "./App.css";
import FullPage from "./components/Fullpage";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FullPage></FullPage>
    </>
  );
}

export default App;
