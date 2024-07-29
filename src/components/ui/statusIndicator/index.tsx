import React from "react";

interface StatusIndicatorProps {
  status: "scheduled" | "completed" | "cancelled" | "incomplete";
}
const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status }) => {
  const statusColors: { [key: string]: string } = {
    scheduled: "bg-blue-500 ring-blue-300 shadow-blue-500/50 hover:bg-blue-400",
    completed:
      "bg-green-500 ring-green-300 shadow-green-500/50 hover:bg-green-400",
    cancelled: "bg-red-500 ring-red-300 shadow-red-500/50 hover:bg-red-400",
  };
  return (
    <span
      className={`inline-block w-3 h-3 rounded-lg mr-2 shadow-xl ring-2 transition ${statusColors[status]}`}
    />
  );
};

export default StatusIndicator;
