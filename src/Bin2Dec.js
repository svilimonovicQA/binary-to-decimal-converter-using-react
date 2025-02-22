import React, { useState } from "react";

const Bin2Dec = () => {
  const [binaryInput, setBinaryInput] = useState("");
  const [decimalOutput, setDecimalOutput] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^[01]*$/.test(value) || value === "") {
      setBinaryInput(value);
      setError("");
    } else {
      setError("Please enter only 0s and 1s.");
    }
  };

  const convertToDecimal = () => {
    if (binaryInput.length > 8) {
      setError("Input must be up to 8 binary digits.");
      return;
    }
    const decimalValue = binaryInput
      .split("")
      .reverse()
      .reduce((acc, digit, index) => {
        return acc + parseInt(digit) * Math.pow(2, index);
      }, 0);
    setDecimalOutput(decimalValue);
  };

  return (
    <div>
      <h1>Binary to Decimal Converter</h1>
      <input
        type="text"
        value={binaryInput}
        onChange={handleInputChange}
        maxLength="8"
        placeholder="Enter binary digits (0s and 1s)"
      />
      <button onClick={convertToDecimal}>Convert</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <h2>Decimal Output: {decimalOutput}</h2>
    </div>
  );
};

export default Bin2Dec;
