import "./App.css";
import { Routes, Route } from "react-router-dom";

// Components
import Sidebar from "./components/sidebar/sidebar";
import Main from "./pages/main/main";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
