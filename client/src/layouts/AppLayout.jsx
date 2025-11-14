import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function AppLayout() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: 16 }}>
        <Outlet />
      </main>
    </div>
  );
}
