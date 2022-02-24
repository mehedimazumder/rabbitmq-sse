import React, { useState } from "react";
import { Layout, notification, Spin } from "antd";
import { getPdfData, saveData, saveXlData } from "../server";

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: "Success",
    description: "Data Successfully saved",
  });
};

const openNotificationWithIconErr = (type, message) => {
  notification[type]({
    message: "Error",
    description: message,
  });
};

const openNotificationWithIconDbErr = (type, message) => {
  notification[type]({
    message: "Error",
    description: message,
  });
};

const withAllOperation = (OriginalComponent) => {
  return function NewComponent() {
    const [isXl, setIsXl] = useState(false);

    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);

    const fileHandler = (e) => {
      if (e.target.files[0].name.includes(".xlsx")) {
        setIsXl(true);
      }
      if (e.target.files[0].name.includes(".pdf")) {
        setIsXl(false);
      }
      setData(null);
      setFile(e.target.files[0]);
    };

    const upload = async () => {
      if (file) {
        setLoading(true);
        // try {
        const data = await getPdfData(file);
        setData(data.data);
        return data.data;
        // } catch (error) {
        //   console.error(error);
        //   openNotificationWithIconErr(
        //     "error",
        //     error?.response?.data?.message || "Check your internet connection!"
        //   );
        // }
        // setLoading(false);
      }
    };

    const save = async () => {
      if (file) {
        setLoading(true);
        try {
          if (!isXl) {
            const data = await upload();
            if (data?.invoice?.data) {
              await saveData("FULL", "SINGLE", data);
            } else if (data.invoice?.skuData) {
              await saveData("PARTIAL", "SINGLE", data);
            } else if (data.smallInvoice) {
              await saveData("NONE", "NONE", data);
            } else if (data.ratioSMInvoice) {
              await saveData("FULL", "RATIO", data);
            } else if (data.ratioInvoice) {
              await saveData("PARTIAL", "RATIO", data);
            }
          } else {
            await saveXlData(file);
          }
          openNotificationWithIcon("success");
        } catch (error) {
          console.error(error);
          openNotificationWithIconDbErr(
            "error",
            error?.response?.data?.message || "Check your internet connection!"
          );
        } finally {
          setLoading(false);
        }
      }
    };

    return (
      <OriginalComponent
        loading={loading}
        fileHandler={fileHandler}
        upload={upload}
        save={save}
        data={data}
        isXl={isXl}
      />
    );
  };
};

export default withAllOperation;
