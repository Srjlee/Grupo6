import { useState } from "react";

const Form = ({ character = null, updateCharacter }) => {
  const defaultInputs = { username: "", email: "" };
  const [inputs, updateInputs] = useState(defaultInputs);
  const [error, setError] = useState(null);
  const style = {
    padding: "1rem",
    border: "1px solid black",
    borderRadius: "5px",
    backgroundColor: "#ccc",
    width: "250px",
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (inputs.username && inputs.email) {
      updateCharacter(inputs);
      setError(null);
      return;
    }
    updateInputs(defaultInputs);
    setError("Error");
  };

  const handlerOnChange = (e) => {
    updateInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handlerSubmit} style={style}>
        <div>
          <input
            onChange={handlerOnChange}
            name="username"
            type="text"
            placeholder="username"
            value={inputs.username}
          />
        </div>
        <div>
          <input
            onChange={handlerOnChange}
            name="email"
            type="email"
            placeholder="email"
            value={inputs.email}
          />
        </div>
        <div>
          <input type="submit" value="Guardar" />
        </div>
      </form>
    </>
  );
};

export default Form;
