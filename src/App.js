import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import Dashboard from "./components/Dashboard";

// (later we will add more pages)
const TeamMembers = () => <div className="p-4">Team Members</div>;
const Customers = () => <div className="p-4">Customers</div>;

export default function App() {
  return (
    <div className="d-flex">
      <Sidebar />

      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/team" element={<TeamMembers />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>
      </div>
    </div>
  );
}
