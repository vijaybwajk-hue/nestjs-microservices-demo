import { useEffect, useState } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/orders")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setOrders(data);
        else {
          console.error("Non-array returned:", data);
          setOrders([]);
        }
      })
      .catch((err) => console.error("Error loading orders:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Orders</h2>

      <div style={boxStyle}>
        <table style={tableStyle}>
          <thead>
            <tr style={headerRow}>
              <th style={th}>Order ID</th>
              <th style={th}>Product ID</th>
              <th style={th}>Product Name</th>
              <th style={th}>Quantity</th>
              <th style={th}>Customer</th>
              <th style={th}>Address</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((o) => (
              <tr key={o.id} style={row}>
                <td style={td}>{o.id}</td>
                <td style={td}>{o.product?.id}</td>
                <td style={td}>{o.product?.name}</td>
                <td style={td}>{o.quantity}</td>
                <td style={td}>{o.customerName}</td>
                <td style={td}>{o.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

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
