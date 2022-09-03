import React from "react";

const SinglePhone = ({ phone }) => {
  return (
    <>
      <img className="beer-image" src={`${phone.image_url}`} alt={phone.name} />
      <div className="text-container">
        <div className="flex-container">
          <h1 className="normal">{phone.name}</h1>
          <h1 className="normal grey">{phone.price}€</h1>
        </div>
        <div className="flex-container">
          <h3 className="normal grey"> {phone.description}</h3>
          <h5>Manufacturer: <span className="normal">{phone.manufacturer}</span></h5>
          <h5>Screen:<span className="normal"> {phone.screen}</span></h5>
          <h5>Processor: <span className="normal"> {phone.processor}</span></h5>
          <h5>Ram: <span className="normal"> {phone.ram}</span></h5>
        </div>
      </div>
    </>
  );
};

export default SinglePhone;
