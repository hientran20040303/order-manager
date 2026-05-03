# Inventory & Order Fulfillment Manager

## 📌 Project Overview
This project is a lightweight fulfillment engine designed for small-to-medium retail operations. It provides a structured way to model product inventory, manage stock levels, and process multi-item customer orders using JavaScript. 

The core of the application focuses on **Transactional Integrity**, ensuring that orders are only processed if sufficient stock exists, and automatically updating inventory values across the system once a sale is confirmed.

## 🚀 Technologies Used
*   **Language:** JavaScript
*   **Data Structures:** Objects, Nested Arrays
*   **Functional Programming:** `.map()`, `.filter()`, and `.reduce()`
*   **Logic Patterns:** Transactional validation and inventory reconciliation

## ✨ Key Features
*   **Dynamic Inventory Modeling:** Maintains a detailed catalog of products including SKUs, pricing, and real-time stock levels.
*   **Order Processing Engine:** A robust function that validates stock availability for multiple items in a single order before deducting inventory or finalizing totals.
*   **Business Intelligence Reporting:** 
    *   **Total Valuation:** Uses `.reduce()` to calculate the total market value of all assets in stock.
    *   **Low Stock Alerts:** Uses `.filter()` to automatically identify and flag items requiring replenishment.
    *   **Automated Price Lists:** Generates formatted price catalogs using `.map()`.
*   **CRUD Operations:** Demonstrated ability to add, remove, and update inventory items dynamically.

## 🏃 How to Run Locally
1. **Clone the repository:**
   ```bash
   git clone https://github.com/hientran20040303/order-manager
