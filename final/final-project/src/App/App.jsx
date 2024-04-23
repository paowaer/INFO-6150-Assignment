import { useState } from "react";

import "./App.css";

import Header from "../Header/Header";
import MainArea from "../MainArea/MainArea";
import Footer from "../Footer/Footer";

function App() {
  const [page, setPage] = useState("Home");

  return (
    <div className="app">
      <Header setPage={setPage} />
      <MainArea page={page} setPage={setPage} />
      <Footer setPage={setPage} />
    </div>
  );
}

export default App;
