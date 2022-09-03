import service from "../services/apiHandler";
import React, { useState, useEffect } from "react";

const Phones = () => {
    const [phones, setPhones] = useState ("");

    useEffect(() => {
        const getAllPhones = async () => {
          try {
            const response = await service.getAllPhones();
            setPhones(response.data);
            console.log(response)
          } catch (error) {
            console.log(error.message);
          }
        };
        getAllPhones();
      }, []);

      return (
        <p>A</p>
        )
}

