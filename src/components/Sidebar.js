export default function Sidebar() {
  return (
    <div className="sidebar">
      <h5 className="p-3 fw-bold">AI Agent</h5>

      <a className="active">
        <i className="fa fa-chart-line me-2"></i> Dashboard
      </a>
      <a>
        <i className="fa fa-users me-2"></i> Team Members
      </a>
      <a>
        <i className="fa fa-user me-2"></i> Customers
      </a>
      <a>
        <i className="fa fa-calendar-check me-2"></i> Appointments
      </a>
      <a>
        <i className="fa fa-ticket-alt me-2"></i> Tickets
      </a>
    </div>
  );
}
