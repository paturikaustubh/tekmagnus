import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <main className="flex pb-4">
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <Home openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
    </main>
  );
}

export default App;
