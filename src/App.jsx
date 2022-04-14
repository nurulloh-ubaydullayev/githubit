import "./App.css";
import { Routes, Route } from "react-router-dom";

// Components
import Sidebar from "./components/sidebar/sidebar";
import Main from "./pages/main/main";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
