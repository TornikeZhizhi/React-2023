import Results from "./Results";
import UserInput from "./UserInput";
import { useState } from "react";

function InverstmentMain() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (inputIndefier, newValue) => {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [inputIndefier]: newValue };
    });
  };
  return (
    <div className="InverstmentMain">
      <>
        <UserInput
          handleChange={handleChange}
          test={"dsaa"}
          userInput={userInput}
        />
        <Results input={userInput} />
      </>
    </div>
  );
}

export default InverstmentMain;
