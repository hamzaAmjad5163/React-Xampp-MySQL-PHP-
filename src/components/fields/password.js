import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const PasswordInput = ({ value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-3 position-relative">
      <input
        type={showPassword ? "text" : "password"}
        className="form-control"
        placeholder="Password"
        value={value}
        onChange={onChange}
        required
      />
      <FontAwesomeIcon
        icon={showPassword ? faEyeSlash : faEye}
        className="position-absolute top-50 end-0 translate-middle-y me-3"
        onClick={() => setShowPassword(!showPassword)}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default PasswordInput;
