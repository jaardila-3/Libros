import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({ name: "", age: "" });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <br />
      <input
        type="number"
        name="age"
        value={form.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <div>
        <button onClick={() => alert(`name: ${form.name}, age: ${form.age}`)}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
