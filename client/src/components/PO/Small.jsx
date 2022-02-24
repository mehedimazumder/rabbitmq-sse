import STbl from "../SmallTable";
import React from "react";

function Small({ data }) {
  return (
    <>
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <div>
          <span style={{ fontWeight: "bold" }}>Po Date:</span> {data?.poDate}
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>Buyer:</span> {data?.buyer}
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>buyerAddress:</span>{" "}
          {data?.buyerAddress}
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>buyerID:</span> {data?.buyerID}
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>buyerRegistration:</span>{" "}
          {data?.buyerRegistration}
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>supplier:</span> {data?.supplier}
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>supplierAddress:</span>{" "}
          {data?.supplierAddress}
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>sendInvoiceNo:</span>{" "}
          {data?.sendInvoiceNo}
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>ormsOrderNo:</span>{" "}
          {data?.ormsOrderNo}
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>retekOrderNo:</span>{" "}
          {data?.retekOrderNo}
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>orderApprover:</span>{" "}
          {data?.orderApprover}
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>buyerAgain:</span>{" "}
          {data?.buyerAgain}
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>deliveryLocation:</span>{" "}
          {data?.deliveryLocation}
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>locationType:</span>{" "}
          {data?.locationType}
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>orderDate:</span>{" "}
          {data?.orderDate}
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>deliveryDate:</span>{" "}
          {data?.deliveryDate}
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>fobDate:</span> {data?.fobDate}
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>factory:</span> {data?.factory}
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>section:</span> {data?.section}
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>group:</span> {data?.group}
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>subGroup:</span> {data?.subGroup}
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>status:</span> {data?.status}
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>vpn:</span> {data?.vpn}
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>description:</span>{" "}
          {data?.description}
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>singleOrRatio:</span>{" "}
          {data?.singleOrRatio}
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>colour:</span> {data?.colour}
        </div>
      </div>

      <section>
        <STbl data={data?.data} />
      </section>
    </>
  );
}

export default Small;
