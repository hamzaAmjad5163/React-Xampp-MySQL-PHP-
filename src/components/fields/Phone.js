import React, { useState } from "react";

const PhoneInput = ({ value, onChange }) => {
  const [isValid, setIsValid] = useState(null);

  const handleChange = (e) => {
    const Phone = e.target.value;
    onChange(e);
    const PhoneRegex = /^[0-9]/;
    setIsValid(PhoneRegex.test(Phone));
  };

  return (
    <div className="">
      <input
        type="number"
        className={`form-control ${isValid === null ? "" : isValid ? "is-valid" : "is-invalid"}`}
        placeholder="Phone"
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default PhoneInput;
