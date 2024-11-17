import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const CustomPhoneInput = () => {
  return (
    <div className="w-full max-w-md">
      <PhoneInput
        country={"eg"}
        containerClass="phone-input-container"
        inputClass="phone-input"
        buttonClass="country-dropdown"
        dropdownClass="country-list"
      />
      <style jsx global>{`
        .phone-input-container {
          position: relative;
        }

        .phone-input {
          width: 100% !important;
          height: 40px !important;
          background-color: rgb(32, 33, 35) !important;
          border: none !important;
          color: white !important;
          padding: 8px 8px 8px 50px !important;
          font-size: 14px !important;
        }

        .phone-input:focus {
          box-shadow: none !important;
          border: none !important;
        }

        .country-dropdown {
          background: rgb(32, 33, 35) !important;
          border: none !important;
          border-radius: 0 !important;
        }

        .country-dropdown:hover {
          background-color: rgba(255, 255, 255, 0.1) !important;
        }

        .selected-flag {
          background: transparent !important;
          padding: 0 0 0 8px !important;
        }

        .arrow {
          border-left: 4px solid transparent !important;
          border-right: 4px solid transparent !important;
          border-top: 4px solid #6b7280 !important;
          margin-left: 4px !important;
        }

        .country-list {
          background: rgb(32, 33, 35) !important;
          border: 1px solid #40414f !important;
          color: white !important;
          max-height: 200px !important;
        }

        .country-list .country:hover {
          background-color: rgba(255, 255, 255, 0.1) !important;
        }

        .country-list .country.highlight {
          background-color: rgba(255, 255, 255, 0.1) !important;
        }

        .dial-code {
          color: white !important;
        }

        .form-control:focus {
          box-shadow: none !important;
          border-color: transparent !important;
        }
      `}</style>
    </div>
  );
};

export default CustomPhoneInput;
