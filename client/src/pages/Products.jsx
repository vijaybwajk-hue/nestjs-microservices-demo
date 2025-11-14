import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  fetch("http://localhost:3001/products")
    .then(res => res.json())
    .then(data => {
      if (Array.isArray(data)) {
        setProducts(data);
      } else {
        console.error("Products API returned non-array:", data);
        setProducts([]); 
      }
    })
    .catch(err => console.error("Fetch error:", err));
}, []);


  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>

      <div style={boxStyle}>
        <table style={tableStyle}>
          <thead>
            <tr style={headerRow}>
              <th style={th}>ID</th>
              <th style={th}>Name</th>
              <th style={th}>Price</th>
              <th style={th}>Stock</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr key={p.id} style={row}>
                <td style={td}>{p.id}</td>
                <td style={td}>{p.name}</td>
                <td style={td}>{p.price}</td>
                <td style={td}>{p.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Same styles as Orders.jsx
const boxStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  overflowX: "auto",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
};

const th = {
  textAlign: "left",
  padding: "10px",
  fontWeight: "600",
};

const td = {
  padding: "10px",
  borderBottom: "1px solid #eee",
};

const row = {
  background: "white",
};

const headerRow = {
  borderBottom: "2px solid #ddd",
};
