import { Meta, Story } from "@storybook/react";
import { TableComponent, TableProps } from "../../src/components/Table";

import React from "react";

const meta: Meta<TableProps> = {
  title: "Components/Inputs",
  component: TableComponent,
  argTypes: {},
};

export default meta;

const exampleHeader = [
  {
    name: "Name",
    key: "name",
    align: "left",
  },
  {
    name: "Mobile",
    key: "mobile",
    align: "left",
  },
  {
    name: "Email",
    key: "email",
    align: "left",
  },
  {
    name: "Status",
    key: "status",
    align: "left",
  },
];

const exampleItems = [
    {
      name: "Hasan AlTabatabai",
      mobile: "+965 68654684",
      email: "hasan@gmail.com",
      status: "active",
    },
    {
      name: "Hasan AlTabatabai",
      mobile: "+965 68654684",
      email: "hasan@gmail.com",
      status: "active",
    },
    {
      name: "Hasan AlTabatabai",
      mobile: "+965 68654684",
      email: "hasan@gmail.com",
      status: "active",
    },
    {
      name: "Hasan AlTabatabai",
      mobile: "+965 68654684",
      email: "hasan@gmail.com",
      status: "active",
    },
  ];

const TableTemplate: Story<TableProps> = (args) => <TableComponent {...args} />;

export const Table = TableTemplate.bind({});
Table.args = {
  headers: exampleHeader,
  items: exampleItems,
  hasPagination: true,
  paginationProps:{
    rowsPerPage: [10, 20, 30],
    count: 60,
    handleChangeRow: (page) => {console.log(page);
    },
    rowPerPage: 10,
    page: 2,
  }
};
