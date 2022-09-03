import { useEffect, useState } from "react";
import service from "../../services/apiHandler";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
import { useParams } from "react-router-dom";
import SinglePhone from "../../components/SinglePhone";
import "./SinglePhonePage.css";

const SinglePhonePage = () => {
  const [phone, setPhone] = useState("");
  const { id } = useParams();
  useEffect(() => {
    const getPhoneData = async () => {
      try {
        const phone = await service.getPhoneData(id);
        setPhone(phone.data[0]);
      } catch (error) {
        console.log(error.message);
      }
    };
    getPhoneData();
  }, []);

  return <>{phone ? <SinglePhone phone={phone} /> : <CircularProgress />}</>;
};

export default SinglePhonePage;
