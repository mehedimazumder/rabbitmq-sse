import React from "react";
import { Table, Tag, Space } from "antd";

const columns = [
  {
    title: "color",
    dataIndex: "color",
    key: "color",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "breakUpQty",
    dataIndex: "breakUpQty",
    key: "breakUpQty",
  },
  {
    title: "Size",
    dataIndex: "size",
    key: "size",
  },
  {
    title: "tpnd",
    dataIndex: "tpnd",
    key: "tpnd",
  },
  {
    title: "tpnb",
    dataIndex: "tpnb",
    key: "tpnb",
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
    dataIndex: "unitSellingPrice",
    key: "unitSellingPrice",
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
];


function RTSTbl({ data }) {
  return <Table columns={columns} dataSource={data} />;
}

export default RTSTbl;
