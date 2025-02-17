import React from "react";

const YourBetSidebar = () => {

    const handleStatus = (status) => {
        console.log(status)
    }

  return (
    <div className="col-12 sidebar">
      <div className="list-group rounded-0 ">
        <li className="p-4 list-head" aria-current="true">
          ALL TOURNAMENTS
        </li>
        <li className={"p-4 bold"} onClick={() => handleStatus("Pending")}>
          <span>Pending</span>
        </li>
        <li className={"p-4 bold"} onClick={() => handleStatus("Win")}>
          <span>Win</span>
        </li>
        <li className={"p-4 bold"} onClick={() => handleStatus("Lose")}>
          <span>Lose</span>
        </li>
        <li className={"p-4 bold"} onClick={() => handleStatus("Canceled")}>
          <span>Canceled</span>
        </li>
      </div>
    </div>
  );
};

export default YourBetSidebar;
