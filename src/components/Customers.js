import EntityList from "../components/EntityList";
import { customers } from "../data/customerData";

export default function Customers() {
  const columns = [
    { key: "name", label: "Customer" },
    { key: "business", label: "Business" },
    {
      key: "status",
      label: "Status",
      render: value => (
        <span className="status-badge status-online">
          {value}
        </span>
      )
    },
    { key: "tickets", label: "Tickets" }
  ];

  const actions = [
    { icon: "fa-eye", label: "View" },
    { icon: "fa-ticket-alt", label: "Create Ticket" }
  ];

  return (
    <EntityList
      title="Customers"
      data={customers}
      columns={columns}
      actions={actions}
    />
  );
}
