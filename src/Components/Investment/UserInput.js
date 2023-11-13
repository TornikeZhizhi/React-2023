function UserInput({ handleChange, userInput }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label>Initial investement</label>
          <input
            value={userInput.initialInvestment}
            onChange={(event) =>
              handleChange("initialInvestment", event.target.value)
            }
            type="number"
          />
        </p>
        <p>
          <label>Anual investement</label>
          <input
            value={userInput.annualInvestment}
            onChange={(event) =>
              handleChange("annualInvestment", event.target.value)
            }
            type="number"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>expected investement</label>
          <input
            value={userInput.expectedReturn}
            onChange={(event) =>
              handleChange("expectedReturn", event.target.value)
            }
            type="number"
          />
        </p>
        <p>
          <label>duration investement</label>
          <input
            value={userInput.duration}
            onChange={(event) => handleChange("duration", event.target.value)}
            type="number"
          />
        </p>
      </div>
    </div>
  );
}

export default UserInput;
