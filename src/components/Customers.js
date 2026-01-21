import React from "react";

// Dummy Data
const customerData = [
  { id: 1, name: "John Smith", email: "john.smith@gmail.com", location: "New York, USA", status: "Active", img: "https://i.pravatar.cc/150?u=1" },
  { id: 2, name: "Sara Lee", email: "sara.lee@gmail.com", location: "Los Angeles, USA", status: "Active", img: "https://i.pravatar.cc/150?u=2" },
  { id: 3, name: "Michael Chen", email: "m.chen@gmail.com", location: "Toronto, Canada", status: "Active", img: "https://i.pravatar.cc/150?u=3" },
  { id: 4, name: "Emily Davis", email: "emily.d@gmail.com", location: "London, UK", status: "Active", img: "https://i.pravatar.cc/150?u=4" },
  { id: 5, name: "David Wilson", email: "david.w@gmail.com", location: "Austin, USA", status: "Inactive", img: "https://i.pravatar.cc/150?u=5" },
  { id: 6, name: "Anna Johnson", email: "anna.j@gmail.com", location: "Berlin, Germany", status: "Active", img: "https://i.pravatar.cc/150?u=6" },
  { id: 7, name: "James Brown", email: "j.brown@gmail.com", location: "Paris, France", status: "Active", img: "https://i.pravatar.cc/150?u=7" },
  { id: 8, name: "Lisa Wong", email: "lisa.w@gmail.com", location: "Singapore", status: "Churned", img: "https://i.pravatar.cc/150?u=8" },
];

export default function Customers() {
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "active": return "status-active";
      case "inactive": return "status-inactive";
      case "churned": return "status-churned";
      default: return "";
    }
  };

  return (
    <div className="fade-in">
      {/* 1. Page Header */}
      <div className="page-header-wrapper">
        <h1 className="page-title">Customers</h1>
        <div className="header-actions">
          <button className="btn btn-outline">
            <i className="fa fa-download"></i> Export
          </button>
          <button className="btn btn-primary">
            <i className="fa fa-plus"></i> Add Customer
          </button>
        </div>
      </div>

      {/* 2. Search Bar */}
      <div className="search-container">
        <i className="fa fa-search text-muted"></i>
        <input 
          type="text" 
          placeholder="Search customers..." 
          className="search-input" 
        />
      </div>

      {/* 3. Stats Grid (Colored Cards) */}
      <div className="stats-grid">
        <div className="stat-card blue">
          <span className="stat-label">Total Customers</span>
          <div className="stat-value">
            1,280 <span className="stat-subtext text-muted" style={{fontSize: '1rem', fontWeight: '400'}}>👥</span>
          </div>
        </div>
        
        <div className="stat-card green">
          <span className="stat-label">Active Customers</span>
          <div className="stat-value">
            850 <span className="stat-subtext text-green">↑ 12.5%</span>
          </div>
        </div>

        <div className="stat-card purple">
          <span className="stat-label">New Customers</span>
          <div className="stat-value">
             45 <span className="stat-subtext text-muted" style={{fontSize: '0.8rem'}}>+10 this week</span>
          </div>
        </div>

        <div className="stat-card red">
          <span className="stat-label">Churned</span>
          <div className="stat-value">
             18 <span className="stat-subtext text-red">↓ 5 this month</span>
          </div>
        </div>
      </div>

      {/* 4. Data Table Section */}
      <div className="table-card">
        {/* Table Filters (Optional) */}
        <div className="table-filters">
           <span className="text-muted small">Status: <b>All</b> <i className="fa fa-chevron-down ms-1"></i></span>
           <span className="text-muted small">Sort by: <b>Recent</b> <i className="fa fa-chevron-down ms-1"></i></span>
        </div>

        {/* Table */}
        <table className="custom-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Location</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customerData.map((customer) => (
              <tr key={customer.id}>
                <td>
                  <div className="user-info">
                    <img src={customer.img} alt="av" className="user-avatar" />
                    <span className="user-name">{customer.name}</span>
                  </div>
                </td>
                <td className="text-muted">{customer.email}</td>
                <td className="text-muted">{customer.location}</td>
                <td>
                  <span className={`status-badge ${getStatusClass(customer.status)}`}>
                    {customer.status}
                  </span>
                </td>
                <td>
                  <a href="#view" className="text-primary fw-bold small me-3">View</a>
                  <i className="fa fa-ellipsis-h text-muted" style={{cursor:'pointer'}}></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="table-footer">
          <span className="text-muted small">Showing 1 to 8 of 1,280 entries</span>
          <div className="d-flex gap-2">
            <button className="btn btn-outline py-1 px-3 disabled">&lt;</button>
            <button className="btn btn-primary py-1 px-3">1</button>
            <button className="btn btn-outline py-1 px-3">2</button>
            <button className="btn btn-outline py-1 px-3">...</button>
            <button className="btn btn-outline py-1 px-3">16</button>
            <button className="btn btn-outline py-1 px-3">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}