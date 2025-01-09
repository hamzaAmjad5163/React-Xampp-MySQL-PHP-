import React from "react";

const EmailInput = ({ value, onChange }) => {
    return (
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={value}
          onChange={onChange}
          required
        />
      </div>
    );
  };
  
  export default EmailInput;
  
