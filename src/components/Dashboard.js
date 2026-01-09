export default function Dashboard() {
  return (
    <div className="container-fluid p-4">
      <h4 className="mb-4">Dashboard</h4>

      <div className="row g-4">
        <div className="col-md-3">
          <div className="card p-3">
            <h6>Total Customers</h6>
            <h3>128</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3">
            <h6>Active Tickets</h6>
            <h3>14</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3">
            <h6>Today Appointments</h6>
            <h3>6</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3">
            <h6>Team Members</h6>
            <h3>8</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
