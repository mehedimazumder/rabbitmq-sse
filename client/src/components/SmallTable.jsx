import React from "react";
import { Table, Tag, Space } from "antd";

const columns = [
  {
    title: "TPN",
    dataIndex: "tpn",
    key: "tpn",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "EAN",
    dataIndex: "ean",
    key: "ean",
  },

  {
    title: "ITF",
    dataIndex: "itf",
    key: "itf",
  },
  {
    title: "Size",
    dataIndex: "size",
    key: "size",
  },
  {
    title: "RP_CPM_QTY_CASE_SIZE",
    dataIndex: "rp_CPM_QTY_CASE_SIZE",
    key: "rp_CPM_QTY_CASE_SIZE",
  },
  {
    title: "TOT_UNIT_ORDERED",
    dataIndex: "tot_UNIT_ORDERED",
    key: "tot_UNIT_ORDERED",
  },
  {
    title: "BASIC_INVOICE_COST",
    dataIndex: "basic_INVOICE_COST",
    key: "basic_INVOICE_COST",
  },
  {
    title: "TOTAL_COST_VALUE",
    dataIndex: "total_COST_VALUE",
    key: "total_COST_VALUE",
  },
];


function STbl({ data }) {
  return <Table columns={columns} dataSource={data} />;
}

export default STbl;
