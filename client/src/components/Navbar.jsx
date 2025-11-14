import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { signedUp, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();                    // clears localStorage + context
    navigate("/signup", { replace: true });  // redirects properly
  };

  return (
    <nav style={{ padding: "15px", background: "#f5f5f5", marginBottom: "20px" }}>
      {!signedUp && <Link style={link} to="/signup">Signup</Link>}

      {signedUp && (
        <>
          <Link style={link} to="/products">Products</Link>
          <Link style={link} to="/orders">Orders</Link>
          <Link style={link} to="/create-product">Create Product</Link>
          <Link style={link} to="/create-order">Create Order</Link>

          <button
            onClick={handleLogout}
            style={{
              marginLeft: 20,
              padding: "6px 10px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </>
      )}
    </nav>
  );
}

const link = {
  marginRight: "20px",
  textDecoration: "none",
  color: "black",
  fontSize: "16px"
};
