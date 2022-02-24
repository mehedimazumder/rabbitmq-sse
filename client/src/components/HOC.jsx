import React, { useState } from "react";
import { Layout, notification, Spin } from "antd";
import { getData, saveData } from "../server";

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

const withOperation = (OriginalComponent) => {
  return function NewComponent() {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [type, setType] = useState("");
    const [category, setCategory] = useState("");

    const fileHandler = (e) => {
      setData(null);
      setFile(e.target.files[0]);
    };

    const upload = async () => {
      if (file) {
        setLoading(true);
        try {
          const data = await getData(file, type, category);
          setData(data.data);
        } catch (error) {
          console.error(error);
          openNotificationWithIconErr(
            "error",
            error?.response?.data?.message || "Check your internet connection!"
          );
        }
        setLoading(false);
      }
    };

    const save = async () => {
      console.log(type);
      if (file) {
        setLoading(true);
        try {
          await saveData(type, category, data);
          openNotificationWithIcon("success");
        } catch (error) {
          console.error(error);
          openNotificationWithIconDbErr(
            "error",
            error?.response?.data?.message || "Check your internet connection!"
          );
        }
        setLoading(false);
      }
    };

    return (
      <OriginalComponent
        loading={loading}
        setType={setType}
        setCategory={setCategory}
        fileHandler={fileHandler}
        upload={upload}
        save={save}
        data={data}
        category={category}
        type={type}
      />
    );
  };
};

export default withOperation;
