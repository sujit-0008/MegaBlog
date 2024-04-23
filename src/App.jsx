import React from "react";
import "./App.css";
import { Header, Footer, UsegetUser } from "../src/components/index";
import { Outlet } from "react-router-dom";

function App() {
  const { loading } = UsegetUser();
  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          TODO: <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <div>Please waite </div>
  );
}

export default App;
