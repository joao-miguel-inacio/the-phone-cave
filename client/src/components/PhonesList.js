import React from "react";
import { Link } from "react-router-dom";

const PhonesList = (phone) => {
  console.log(phone)

  return (
    <>
      <Link to={`/phones/${phone.id}`} className="phone-list-item">
        <img
          className="phone-list-image"
          src={`${phone.image_url}`}
          alt={phone.name}
        />
        <div className="phone-list-details">
          <h2>{phone.name}</h2>
          <h3>{phone.price} €</h3>
          <p>
            <span className="strong">Created by: </span>
            {phone.manufacturer}
          </p>
        </div>
      </Link>
      <hr />
    </>
  );
};

export default PhonesList;
