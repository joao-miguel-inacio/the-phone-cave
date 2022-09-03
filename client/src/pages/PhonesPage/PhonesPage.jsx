import service from "../../services/apiHandler";
import React, { useState, useEffect } from "react";
import PhonesList from "../../components/PhonesList";
import "./PhonesPage.css"
import CircularProgress from '@mui/material/CircularProgress';



const Phones = () => {
  const [phones, setPhones] = useState("");

  useEffect(() => {
    const getAllPhones = async () => {
      try {
        const response = await service.getAllPhones();
        setPhones(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getAllPhones();
  }, []);

  const displayPhones = () => {
    return phones.map((phone) => (
      <PhonesList {...phone} key={phone.id}/>
    ))
};
    
  
  return <>{phones ? displayPhones() : <CircularProgress />}</>;
};

export default Phones;
