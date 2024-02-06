import { useState } from "react";

const ApplicationForm = () => {
  const [name, setName] = useState("");

  return (
    <>
      <h1>Job Application Form</h1>
      <p>All fields are mandatory</p>
      <div data-testid="custom-element">Custom HTML Element</div>
      <form>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            style={{
              height: "34px",
              marginBottom: "40px",
              fontSize: "20px",
              marginTop: "15px",
            }}
            type="text"
            id="name"
            value={name}
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};

export default ApplicationForm;
