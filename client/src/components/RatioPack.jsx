import React from "react";
import { Table, Tag, Space } from "antd";

const columns = [
  {
    title: "description",
    dataIndex: "description",
    key: "description",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "cost",
    dataIndex: "cost",
    key: "cost",
  },
  {
    title: "Single Qty",
    dataIndex: "noOfSingles",
    key: "noOfSingles",
  },
  {
    title: "qty",
    dataIndex: "qty",
    key: "qty",
  },
  {
    title: "itfBarcode",
    dataIndex: "itfBarcode",
    key: "itfBarcode",
  },
  {
    title: "sku",
    dataIndex: "sku",
    key: "sku",
  },
  {
    title: "orderValue",
    dataIndex: "orderValue",
    key: "orderValue",
  },
  {
    title: "Quota Category",
    dataIndex: "quotaCategory",
    key: "quotaCategory",
  },
];


function RTPTbl({ data }) {
  return <Table columns={columns} dataSource={data} />;
}

export default RTPTbl;
