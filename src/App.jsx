import { useState } from "react";

import DataInput from "./components/DataInput";
import DataOutput from "./components/DataOutput";
import Header from "./components/Header";
import InputField from "./components/InputField";

const INVESTMENT_PARAMETERS = {
  initialInvestment: 100,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 5,
};

function App() {
  const [userInput, setUserInput] = useState(INVESTMENT_PARAMETERS);
  const inputIsValid = userInput.duration >= 1;

  function handleUserInputData(event) {
    const { name, value } = event.target;
    setUserInput((prev) => {
      return {
        ...prev,
        [name]: +value,
      };
    });
  }
  return (
    <>
      <Header />
      <main>
        <DataInput>
          <div className="input-group">
            <InputField
              value={userInput.initialInvestment}
              name="initialInvestment"
              label="Initial Investment"
              inputData={handleUserInputData}
            />
            <InputField
              value={userInput.annualInvestment}
              name="annualInvestment"
              label="Annual Investment"
              inputData={handleUserInputData}
            />
          </div>
          <div className="input-group">
            <InputField
              value={userInput.expectedReturn}
              name="expectedReturn"
              label="Expected Return"
              inputData={handleUserInputData}
            />
            <InputField
              value={userInput.duration}
              name="duration"
              label="Duration"
              inputData={handleUserInputData}
            />
          </div>
        </DataInput>
        {inputIsValid ? (
          <DataOutput userInput={userInput} />
        ) : (
          <p className="center">Please enter duration greater than zero</p>
        )}
      </main>
    </>
  );
}

export default App;
