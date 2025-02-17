import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const ModelMessage = () => {
  const modelMessage = useSelector((state) => state.modelMessage);

  return (
    <div>
      {modelMessage.isShow && (
        <div
          className="modal fade show d-block mt-4"
          id="staticBackdrop"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog ">
            <div className={`modal-body bg-${modelMessage.messageType} text-center`}>
              <span className="fs-5 text-white">{modelMessage.message}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModelMessage;
