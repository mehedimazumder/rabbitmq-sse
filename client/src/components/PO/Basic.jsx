import React from 'react'
import { Spin } from "antd";
import Tbl from "../Table";

function Basic({data}) {
      return (
            <>
            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
              <div>
                <span style={{ fontWeight: "bold" }}>Purchase Order:</span>{" "}
                {data?.purOrder}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Order Create Date:</span>{" "}
                {data?.orderCreatedAt}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Buyer Address :</span>
                <address>{data?.buyerAddrs}</address>
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Buyer Tel:</span>{" "}
                {data?.bTel}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Buyer Fax:</span>{" "}
                {data?.bFax}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>On Behalf:</span>{" "}
                {data?.onBehalf}
              </div>

              <div>
                <span style={{ fontWeight: "bold" }}>Category:</span>{" "}
                {data?.category}
              </div>
              <hr />
              <div style={{ fontWeight: "bold", color: "blueviolet" }}>
                Buyer Contact
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Hub:</span> {data?.hub}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Phone:</span>{" "}
                {data?.c1Phone}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Fax:</span> {data?.c1Fax}
              </div>
              <hr />
              <div>
                <span style={{ fontWeight: "bold" }}>Seller Address:</span>{" "}
                <address>{data?.sellerAddrs}</address>
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Supplier no:</span>{" "}
                {data?.supplierNo}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Master Supplier:</span>{" "}
                {data?.masterSupplier}
              </div>
              <hr />
              <div style={{ fontWeight: "bold", color: "blueviolet" }}>
                Seller Contact
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Name:</span> {data?.c2Name}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Phone:</span>{" "}
                {data?.c2Phone}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Fax:</span> {data?.c2Fax}
              </div>

              <hr />
              <div>
                <span style={{ fontWeight: "bold" }}>Total Quantity:</span>{" "}
                {data?.totalQty}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Total Value:</span>{" "}
                {data?.totalValue}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Slip Sheet:</span>{" "}
                {data?.slipSheet}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Purchase Terms:</span>{" "}
                {data?.purTerms}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Payment Method:</span>{" "}
                {data?.payMethd}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Payment Terms:</span>{" "}
                {data?.payTerms}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Frieght Terms:</span>{" "}
                {data?.frgTerms}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Supplier Type:</span>{" "}
                {data?.supplierType}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Mode:</span> {data?.mode}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>
                  Earliest Handover Date:
                </span>{" "}
                {data?.handoverDate}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Lading Port:</span>{" "}
                {data?.port}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Country of Origin:</span>{" "}
                {data?.origin}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>
                  Location Destination:
                </span>{" "}
                {data?.dest}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Additional Comments:</span>{" "}
                {data?.comments}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Terms</span> {data?.terms}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>VPN:</span> {data?.vpn}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Style:</span> {data?.style}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Brand:</span> {data?.brand}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Product Description:</span>{" "}
                {data?.prodDesc}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Char Description:</span>{" "}
                {data?.charDesc}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Code:</span> {data?.code}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Certificate:</span>{" "}
                {data?.certificate}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Composition:</span>{" "}
                {data?.composition}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Average Cost:</span>{" "}
                {data?.avgCost}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Unit Measure:</span>{" "}
                {data?.unitMeasure}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Order Value:</span>{" "}
                {data?.orderValue}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Package Method:</span>{" "}
                {data?.pkgMethod}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Dimentions:</span>{" "}
                {data?.dimentions}
              </div>
            </div>
            <section>
              <Tbl data={data?.data} />
            </section>
          </>
      )
}

export default Basic
