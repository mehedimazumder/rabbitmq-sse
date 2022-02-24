import React from "react";
import { Table, Tag, Space } from "antd";

const columns = [
  {
    title: "sku",
    dataIndex: "sku",
    key: "sku",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "color",
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
    dataIndex: "singleQty",
    key: "singleQty",
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
  {
    title: "Quota Category",
    dataIndex: "quotaCategory",
    key: "quotaCategory",
  },
];


function SKTbl({ data }) {
  return <Table columns={columns} dataSource={data} />;
}

export default SKTbl;
