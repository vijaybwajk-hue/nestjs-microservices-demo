export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Logged in!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit} style={{ width: "300px", display: "flex", flexDirection: "column", gap: "10px" }}>
        <label>Email</label>
        <input type="email" required />

        <label>Password</label>
        <input type="password" required />

        <button type="submit" style={{ padding: "10px", background: "black", color: "white" }}>
          Login
        </button>
      </form>
    </div>
  );
}
