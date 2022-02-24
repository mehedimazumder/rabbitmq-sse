import React from "react";
import { Table, Tag, Space } from "antd";

const columns = [
  {
    title: "TPND",
    dataIndex: "tpnd",
    key: "tpnd",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "TPNB",
    dataIndex: "tpnb",
    key: "tpnb",
  },

  {
    title: "Colour",
    dataIndex: "color",
    key: "color",
  },
  {
    title: "Size",
    dataIndex: "size",
    key: "size",
  },
  {
    title: "Single Qty",
    dataIndex: "qty",
    key: "qty",
  },
  {
    title: "Case Size",
    dataIndex: "caseSize",
    key: "caseSize",
  },
  {
    title: "Case Qty",
    dataIndex: "caseQty",
    key: "caseQty",
  },
  {
    title: "EAN Barcode",
    dataIndex: "eanBarcode",
    key: "eanBarcode",
  },
  {
    title: "ITF Barcode",
    dataIndex: "itfBarcode",
    key: "itfBarcode",
  },
  {
    title: "Unit Selling Price",
    dataIndex: "sellPrice",
    key: "sellPrice",
  },
  {
    title: "Unit Cost",
    dataIndex: "unitCost",
    key: "unitCost",
  },
  {
    title: "HTS",
    dataIndex: "hts",
    key: "hts",
  },
  {
    title: "Quota Category",
    dataIndex: "quota",
    key: "quota",
  },
];


function Tbl({ data }) {
  return <Table columns={columns} dataSource={data} />;
}

export default Tbl;
