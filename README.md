# NodeJs-Inventory-Application

A robust **Inventory Management System** built with **Node.js**, **Express**, and **PostgreSQL**, designed to efficiently manage product information and inventory.

## Github Repo

- https://github.com/1Amal/NodeJs-Inventory-Application

## Live Production version

- Render PaaS: https://nodejs-inventory-application.onrender.com

- Koyeb PaaS: https://panicky-charin-amalk-dad47652.koyeb.app

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **ORM/Query Tool**: Native `pg` library
- **Deployment**: Render & Koyeb

---

## 🗂️ Database Design

### **1. Product_Information Table**

This table stores detailed information about the products.

| Column Name           | Data Type | Description                                  |
| --------------------- | --------- | -------------------------------------------- |
| `id`                  | `SERIAL`  | Primary key. Auto-incremented unique ID.     |
| `Category`            | `TEXT`    | Product category (e.g., Watches, Phones).    |
| `Item_Name`           | `TEXT`    | Product name (e.g., "Casio Watch").          |
| `Manufacturer`        | `TEXT`    | Manufacturer's name (e.g., Casio, Motorola). |
| `Model_No`            | `TEXT`    | Unique model number.                         |
| `Product_Description` | `TEXT`    | Detailed product description.                |

### **2. Product_Inventory Table**

This table manages inventory details for the products.

| Column Name        | Data Type | Description                              |
| ------------------ | --------- | ---------------------------------------- |
| `id`               | `SERIAL`  | Primary key. Auto-incremented unique ID. |
| `Quantity`         | `INTEGER` | Stock quantity available.                |
| `Price`            | `NUMERIC` | Price of the product.                    |
| `Customer_Reviews` | `TEXT`    | Reviews from customers.                  |

### **Database Relationships**

- Products of the **same category** (e.g., Watches, Phones) are grouped under `Category`.

**Foreign Key Constraints**:

- `Product_Inventory.product_id` references `Product_Information.id`.

---

## 🌟 Key Features

1. **Relational Data Model**:

   - Organizes product details and inventory efficiently.
   - Easy to expand with new categories or manufacturers.

2. **CRUD Operations**:

   - Perform Create, Read, Update, and Delete operations for both tables.

3. **Optimized Queries**:
   - Uses parameterized queries for better performance and security.

---

## 🔧 Installation and Setup

1. Clone the repository:

   ```bash
   git clone git@github.com:1Amal/NodeJs-Inventory-Application.git
   cd inventory-management-app

   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create and Populate database tables using script:

   ```bash
   node db/populatedb.js
   ```

4. Configure environment variables in .env file or in the PAAS interface

```bash

NODE_ENV="production"
HOST="localhost" OR the PaaS hostname
DATABASE_NAME="inventory" or your Database name
APP_PORT="8000" This is essential for App to run
DATABASE_PORT="5432" Not essential
USER="amal" or the database username
INVENTORY_DATABASE_PASSWORD="Enter the Database Password"
URI_LOCAL_TESTING="postgresql://USERNAME:PASSWORD@localhost:5432/inventory" You will need this to populate the testing environment database, make sure to change the variable inside populatedb.js to URI_LOCAL_TESTING
URI_PRODUCTION="postgres://USERNAME:PASSWORD@df-dsdsn-ridfsr-fg3fcs.ap-southeast-1.pg.dds.app/inventory" You will need this to populate the testing environment database, make sure to change the variable inside populatedb.js to URI_PRODUCTION when deploying to production and to URI_LOCAL_TESTING when in testing environment. This is only required when using populatedb.js script"
```

5. Start the server:

```bash
npm start
```

6. If you get an error stating that you require SSL to connect make sure to add following to the pool.js

```
ssl:true
```
