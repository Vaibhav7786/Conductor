/* eslint-disable */

import { Box } from "@cloudscape-design/components";

export default function StatusBadge({ status }) {
  const color = {
    warning: "orange",
    error: "red",
    success: "green",
  }[status] || "gray";

  return (
    <Box color={color} fontWeight="bold">
      {status}
    </Box>
  );
}
