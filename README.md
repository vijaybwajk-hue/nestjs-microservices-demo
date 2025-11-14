React Client (Vite)
   ├── Signup (JSON-driven form)
   ├── Create Product → POST /products (Product Service)
   ├── Create Order → POST /orders (Order Service)
   └── Orders Page ← GET /orders

Order Service (NestJS)
   └── Calls Product Service to validate productId

Product Service (NestJS)
   └── In-memory CRUD for products

   
# --- PRODUCT SERVICE (PORT 3001) ---
cd product-service
npm install
npm run start:dev
# runs on http://localhost:3001

# --- ORDER SERVICE (PORT 3002) ---
cd ../order-service
npm install
npm run start:dev
# runs on http://localhost:3002

# --- CLIENT FRONTEND (PORT 5173) ---
cd ../client
npm install
npm run dev
# open browser at http://localhost:5173
