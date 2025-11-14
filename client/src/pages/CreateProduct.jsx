import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function CreateProduct() {
  const { signedUp } = useAuth();
  const savedUser = JSON.parse(localStorage.getItem("signupData") || "{}");

  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    createdBy: savedUser["Full Name"] || "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:3001/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        price: Number(form.price),
        stock: Number(form.stock),
      }),
    });

    alert("Product created!");
  };

  return (
    <div style={container}>
      <h2 style={title}>Create Product</h2>

      <form onSubmit={handleSubmit} style={formStyle}>
        {/* Name */}
        <div style={field}>
          <label style={label}>Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            style={input}
          />
        </div>

        {/* Price */}
        <div style={field}>
          <label style={label}>Price</label>
          <input
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
            required
            style={input}
          />
        </div>

        {/* Stock */}
        <div style={field}>
          <label style={label}>Stock</label>
          <input
            name="stock"
            type="number"
            value={form.stock}
            onChange={handleChange}
            required
            style={input}
          />
        </div>

        {/* Created By */}
        <div style={field}>
          <label style={label}>Created By</label>
          <input
            name="createdBy"
            value={form.createdBy}
            onChange={handleChange}
            readOnly
            style={{ ...input, background: "#f1f1f1" }}
          />
        </div>

        <button type="submit" style={button}>
          Create
        </button>
      </form>
    </div>
  );
}

/* ---------- STYLES ----------- */

const container = {
  maxWidth: "420px",
  margin: "40px auto",
  padding: "20px",
  borderRadius: "10px",
  background: "white",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
};

const title = {
  marginBottom: "20px",
  fontSize: "28px",
  fontWeight: "bold",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const field = {
  display: "flex",
  flexDirection: "column",
};

const label = {
  marginBottom: "6px",
  fontWeight: "500",
};

const input = {
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "14px",
};

const button = {
  padding: "12px",
  marginTop: "10px",
  background: "black",
  color: "white",
  border: "none",
  fontSize: "16px",
  borderRadius: "6px",
  cursor: "pointer",
};
