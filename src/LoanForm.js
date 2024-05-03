import { useState } from "react";
import "./FormStyles.css";
import Modal from "./Modal";
export default function LoanForm() {
  const [ErrorMessage, setErrorMessage] = useState();
  const [Show, setShow] = useState(false);
  const [LoanInputs, setLoanInputs] = useState({
    Name: "",
    PhoneNumber: "",
    Age: "",
    IsEmployee: "",
    SalaryRang: "",
  });

  function handleFormSubmit(event) {
    event.preventDefault();
    setErrorMessage(null);
    const { Age, PhoneNumber } = LoanInputs;
    if (Age < 18 || Age > 100) {
      setErrorMessage("The Age is not allowed");
    } else if (PhoneNumber.length < 10 || PhoneNumber.length > 12) {
      setErrorMessage("Phone Number Format Is Incorrect");
    }
    setShow(true);
  }
  const btnIsDisabled =
    LoanInputs.Name == "" ||
    LoanInputs.PhoneNumber == "" ||
    LoanInputs.Age == "" ||
    LoanInputs.SalaryRang === "" ||
    LoanInputs.SalaryRang === "No selected";
  function handelDivClick() {
    if (Show) {
      setShow(false);
    }
  }
  return (
    <div
      onClick={handelDivClick}
      className={"flex"}
      style={{ height: "100vh", flexDirection: "column" }}
    >
      <form className={"flex"} style={{ flexDirection: "column" }}>
        <h2> Requesting a loan </h2>
        <hr></hr>
        <label>Name:</label>
        <input
          type="text"
          required
          value={LoanInputs.Name}
          onChange={(event) => {
            setLoanInputs({ ...LoanInputs, Name: event.target.value });
          }}
        ></input>
        <label>Phone number:</label>
        <input
          type="number"
          required
          value={LoanInputs.PhoneNumber}
          onChange={(event) => {
            setLoanInputs({ ...LoanInputs, PhoneNumber: event.target.value });
          }}
        ></input>
        <label>Age:</label>
        <input
          type="number"
          required
          value={LoanInputs.Age}
          onChange={(event) => {
            setLoanInputs({ ...LoanInputs, Age: event.target.value });
          }}
        ></input>
        <label>Are you an employee ?</label>
        <input
          type="checkbox"
          checked={LoanInputs.IsEmployee}
          onChange={(event) => {
            setLoanInputs({ ...LoanInputs, IsEmployee: event.target.checked });
          }}
        ></input>
        <label>Salary:</label>
        <select
          required
          value={LoanInputs.SalaryRang}
          onChange={(event) => {
            setLoanInputs({ ...LoanInputs, SalaryRang: event.target.value });
          }}
        >
          <option>No selected</option>
          <option>less than 500$</option>
          <option>between 500$ and 2000$</option>
          <option> above 2000$</option>
        </select>
        <button
          onClick={handleFormSubmit}
          disabled={btnIsDisabled}
          className={btnIsDisabled ? "disable" : ""}
        >
          Submit
        </button>
      </form>
      <Modal IsShown={Show} ErrorMessage={ErrorMessage} />
    </div>
  );
}
