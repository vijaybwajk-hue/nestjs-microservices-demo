import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import AppLayout from "./layouts/AppLayout";
import Signup from "./pages/Signup";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import CreateProduct from "./pages/CreateProduct";
import CreateOrder from "./pages/CreateOrder";
import { useAuth } from "./context/AuthContext";

export default function App() {
  const { signedUp } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route
          element={signedUp ? <AppLayout /> : <Navigate to="/signup" replace />}
        >
          <Route path="/" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/create-order" element={<CreateOrder />} />
        </Route>

        <Route path="*" element={<Navigate to={signedUp ? "/" : "/signup"} replace />} />
      </Routes>
    </BrowserRouter>
  );
}
