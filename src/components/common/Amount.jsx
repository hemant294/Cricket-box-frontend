import React from "react";

const Amount = ({ amount }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });

  return <span>{formatter.format(amount)}</span>;
};

export default Amount;
