export default function EntityList({
  title,
  data,
  columns,
  actions = []
}) {
  return (
    <div className="container-fluid p-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>{title}</h4>
        <button className="btn btn-primary">
          <i className="fa fa-plus me-2"></i>
          Add {title.slice(0, -1)}
        </button>
      </div>

      {/* Table */}
      <div className="team-table shadow-sm">
        <table className="table mb-0">
          <thead>
            <tr>
              {columns.map(col => (
                <th key={col.key}>{col.label}</th>
              ))}
              <th className="text-end">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                {/* Name + Avatar (common) */}
                <td>
                  <div className="d-flex align-items-center gap-3">
                    <div className="avatar">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <div className="fw-semibold">{item.name}</div>
                      <small className="text-muted">ID: {item.id}</small>
                    </div>
                  </div>
                </td>

                {/* Dynamic columns */}
                {columns
                  .filter(col => col.key !== "name")
                  .map(col => (
                    <td key={col.key}>
                      {col.render
                        ? col.render(item[col.key], item)
                        : item[col.key]}
                    </td>
                  ))}

                {/* Actions */}
                <td className="text-end">
                  {actions.map(action => (
                    <i
                      key={action.icon}
                      className={`fa ${action.icon} action-btn ms-2`}
                      title={action.label}
                    ></i>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
