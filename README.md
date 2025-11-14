# Microservices Fullstack App (NestJS + React)

A simple microservices-based fullstack project consisting of:

- **Product Service (NestJS, Port 3001)**
- **Order Service (NestJS, Port 3002)**
- **Client (React + Vite, Port 5173)**

Frontend includes a **dynamic JSON-based signup form**, protected routes, and pages to create/view products and orders.

---

## Architecture Overview

### **Client (React + Vite)**
- Signup (dynamic JSON-driven form)
- Create Product → **POST /products** (Product Service)
- Create Order → **POST /orders** (Order Service)
- Orders Page ← **GET /orders** (Order Service)
- Products Page ← **GET /products** (Product Service)

### **Order Service (NestJS)**
- Validates productId by calling Product Service
- Stores & returns orders (in-memory)

### **Product Service (NestJS)**
- In-memory CRUD for products
- Provides product details for Order Service

---

## Run All Services

```bash
# --- PRODUCT SERVICE (PORT 3001) ---
cd product-service
npm install
npm run start:dev
# http://localhost:3001

# --- ORDER SERVICE (PORT 3002) ---
cd ../order-service
npm install
npm run start:dev
# http://localhost:3002

# --- CLIENT FRONTEND (PORT 5173) ---
cd ../client
npm install
npm run dev
# open http://localhost:5173
