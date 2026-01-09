import EntityList from "../components/EntityList";
import { teamMembers } from "../data/teamData";

export default function TeamMembers() {
  const columns = [
    { key: "name", label: "Member" },
    { key: "role", label: "Role" },
    {
      key: "status",
      label: "Status",
      render: value => (
        <span className={`status-badge status-${value.toLowerCase()}`}>
          {value}
        </span>
      )
    },
    { key: "tickets", label: "Tickets" },
    { key: "appointments", label: "Appointments" }
  ];

  const actions = [
    { icon: "fa-eye", label: "View" },
    { icon: "fa-edit", label: "Edit" },
    { icon: "fa-tasks", label: "Assign" }
  ];

  return (
    <EntityList
      title="Team Members"
      data={teamMembers}
      columns={columns}
      actions={actions}
    />
  );
}
