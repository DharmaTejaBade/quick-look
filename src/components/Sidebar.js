import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-title">AI Agent</div>

      <nav className="sidebar-nav">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <i className="fa fa-chart-line"></i>
          Dashboard
        </NavLink>

        <NavLink
          to="/team"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <i className="fa fa-users"></i>
          Team Members
        </NavLink>

        <NavLink
          to="/customers"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <i className="fa fa-user"></i>
          Customers
        </NavLink>

        <NavLink
          to="/appointments"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <i className="fa fa-calendar-check"></i>
          Appointments
        </NavLink>

        <NavLink
          to="/tickets"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <i className="fa fa-ticket-alt"></i>
          Tickets
        </NavLink>
      </nav>
    </aside>
  );
}
