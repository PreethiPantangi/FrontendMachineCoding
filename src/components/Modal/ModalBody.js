import React from "react";

const ModalBody = ({modalHeader, modalBody, modalFooter, updateIsModelOpenVar, updateIsModalOpen}) => {
  return (
    <div className="flex items-center justify-center m-6">
      <div className="w-1/2 h-70 shadow-2xl border border-black">
        <div
          className="float-right cursor-pointer m-2 hover:font-bold"
          onClick={() => updateIsModalOpen(!updateIsModelOpenVar)}
        >
          <img
            src="https://www.freeiconspng.com/thumbs/close-icon/close-icon-47.png"
            alt="close"
            className="w-5 h-5 hover:w-6 hover:h-6"
          />
        </div>
        <div className="text-center bg-gray-300 p-4">{modalHeader}</div>
        <div className="h-40 m-2">{modalBody}</div>
        <div className="text-center bg-gray-300 p-4">{modalFooter}</div>
      </div>
    </div>
  );
};

export default ModalBody;
