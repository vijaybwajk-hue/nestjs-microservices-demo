import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import formSchema from "../formSchema.json";

export default function Signup() {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const [formData, setFormData] = useState({});

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(formData);
    navigate("/", { replace: true });
  };

  return (
    <div style={{ padding: "40px", maxWidth: "500px", margin: "auto" }}>
      <h2 style={{ marginBottom: "20px" }}>Signup</h2>

      <form onSubmit={handleSubmit}>
        {formSchema.data.map((field) => {
          // TEXT FIELD ------------------------------------
          if (field.fieldType === "TEXT") {
            return (
              <div key={field.id} style={{ marginBottom: "15px" }}>
                <label>{field.name}</label>
                <input
                  type="text"
                  defaultValue={field.defaultValue}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  required={field.required}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
              </div>
            );
          }

          // LIST FIELD ------------------------------------
          if (field.fieldType === "LIST") {
            return (
              <div key={field.id} style={{ marginBottom: "15px" }}>
                <label>{field.name}</label>
                <select
                  defaultValue={field.defaultValue}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                >
                  {field.listOfValues1.map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>
            );
          }

          // RADIO FIELD ------------------------------------
          if (field.fieldType === "RADIO") {
            return (
              <div key={field.id} style={{ marginBottom: "15px" }}>
                <label>{field.name}</label>

                <div style={{ marginTop: "8px" }}>
                  {field.listOfValues1.map((v) => (
                    <label key={v} style={{ marginRight: "15px" }}>
                      <input
                        type="radio"
                        name={field.name}
                        value={v}
                        defaultChecked={v === field.defaultValue}
                        onChange={() => handleChange(field.name, v)}
                      />
                      {v}
                    </label>
                  ))}
                </div>
              </div>
            );
          }

          return null;
        })}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "black",
            color: "white",
            border: "none",
            borderRadius: "4px",
            marginTop: "15px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
