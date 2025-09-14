/* eslint-disable */

import { Grid, Header } from "@cloudscape-design/components";
import Statistics from "./StatisticsCard";
import DataTable from "./ApplicationsPage";

export default function DashboardPage() {
  const items = [
    { id: "0", name: "Item 0", type: "Type 0", status: "warning", details: "0" },
    { id: "1", name: "Item 1", type: "Type 1", status: "error", details: "10" },
    { id: "2", name: "Item 2", type: "Type 2", status: "success", details: "20" },
    { id: "3", name: "Item 3", type: "Type 3", status: "success", details: "30" },
    { id: "4", name: "Item 4", type: "Type 4", status: "success", details: "40" },
  ];

  return (
    <div>
      <Header variant="h1">Dashboard</Header>
      <Grid gridDefinition={[{ colspan: { default: 12 } }]}>
        <Statistics />
        <DataTable items={items} />
      </Grid>
    </div>
  );
}
