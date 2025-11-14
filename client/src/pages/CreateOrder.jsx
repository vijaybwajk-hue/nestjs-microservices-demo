import { useEffect, useState } from "react";

export default function CreateOrder() {
  const savedUser = JSON.parse(localStorage.getItem("signupData") || "{}");

  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    productId: "",
    quantity: "",
    customerName: savedUser["Full Name"] || "",
    address: "",
  });

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:3002/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productId: Number(form.productId),
        quantity: Number(form.quantity),
        customerName: form.customerName,
        address: form.address,
      }),
    });

    alert("Order placed!");
  };

  return (
    <div style={container}>
      <h2 style={title}>Create Order</h2>

      <form onSubmit={handleSubmit} style={formStyle}>
        
        {/* Product */}
        <div style={field}>
          <label style={label}>Product</label>
          <select
            name="productId"
            value={form.productId}
            onChange={handleChange}
            required
            style={input}
          >
            <option value="">Select product...</option>
            {products.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>

        {/* Quantity */}
        <div style={field}>
          <label style={label}>Quantity</label>
          <input
            name="quantity"
            type="number"
            value={form.quantity}
            onChange={handleChange}
            required
            style={input}
          />
        </div>

        {/* Customer Name */}
        <div style={field}>
          <label style={label}>Customer Name</label>
          <input
            name="customerName"
            value={form.customerName}
            onChange={handleChange}
            required
            style={input}
          />
        </div>

        {/* Address */}
        <div style={field}>
          <label style={label}>Address</label>
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            style={input}
          />
        </div>

        <button type="submit" style={button}>
          Submit Order
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
