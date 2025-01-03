# Library Management System

A **Library Management System** backend built with **Node.js**, **Express.js**, **Prisma ORM**, **PostgreSQL**, and **TypeScript**. This system provides a robust and efficient API for managing books, members, and borrowing activities.

---

## 🚀 Live URL

**Live API**: [Library Management System API](https://assignment-lac-gamma.vercel.app/api/)

---

## 📚 Project Description

This project is a backend system designed for libraries to manage their core operations. It supports CRUD operations for books and members, as well as borrowing and returning books. It includes efficient error handling and overdue tracking to enhance functionality and user experience.

---

## 🛠️ Technology Stack & Packages

### **Core Technologies**:

- **Node.js**: JavaScript runtime for building scalable server-side applications.
- **Express.js**: Fast and lightweight web framework for Node.js.
- **Prisma ORM**: Advanced database ORM for PostgreSQL with type safety and migration tools.
- **PostgreSQL**: Relational database management system.
- **TypeScript**: Type-safe development for JavaScript.

### **Packages**:

- **date-fns**: Utility library for working with dates.
- **@prisma/client**: Auto-generated client for interacting with the database.
- **@types/node**: Type definitions for Node.js.
- **@types/express**: Type definitions for Express.js.
- **ts-node-dev**: Development server for TypeScript projects.
- **cors**: Middleware for handling Cross-Origin Resource Sharing.
- **tsx**: TypeScript runtime for Node.js applications.

---

## ⚙️ Setup Instructions

### Prerequisites:

- **Node.js** (v18 or higher)
- **PostgreSQL** (latest version)
- **npm** (or **yarn** for package management)

### Steps to Set Up:

1. Clone the repository:
   ```bash
   git clone https://github.com/Rakib011110/Library-Management-Using-Prisma-ORM-Node.js-PostgreSQL-Express.js-TypeScript.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Library-Management-Using-Prisma-ORM-Node.js-PostgreSQL-Express.js-TypeScript
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure the `.env` file:
   Create a `.env` file in the root directory and add the following:

   ```
   DATABASE_URL=postgresql://username:password@localhost:5432/library
   ```

   Replace `username`, `password`, and `library` with your PostgreSQL credentials.

5. Migrate the database using Prisma:
   ```bash
   npx prisma migrate dev --name init
   ```
6. Seed the database (optional):
   ```bash
   npx prisma db seed
   ```
7. Start the development server:

   ```bash
   npm run devs
   ```

8. Access the API at:
   ```
   http://localhost:3000/api
   ```

---

## ✨ Key Features & Functionality

### Core Features:

1. **Book Management**:
   - Add, view, update, and delete book records.
   - Tracks the total and available copies of each book.
2. **Member Management**:
   - Add, view, update, and delete library members.
   - Tracks membership details.
3. **Borrowing & Returning**:
   - Borrow and return books with unique borrow records.
   - Prevents borrowing if no copies are available.
4. **Overdue Tracking**:
   - Tracks overdue books based on a 14-day return policy.
   - Provides borrower details and overdue durations.

### Additional Features:

- **Error Handling**:
  Centralized error handling with clear and consistent responses.
- **API Documentation**:
  Well-structured routes with descriptive endpoints.
- **Scalability**:
  Modular code structure for easy scaling and maintenance.

---

## 🐞 Known Issues/Bugs

- Overdue calculations assume server time is consistent across all environments. May need timezone adjustments for distributed systems.
- Limited validation for request payloads (e.g., string length, formats). Consider adding a validation library like **Zod** or **Joi** for stricter validation.

---

## 📂 Project Structure

```plaintext
src/
├── app/
│   ├── modules/
│   │   ├── book/
│   │   │   ├── book.controller.ts
│   │   │   ├── book.service.ts
│   │   │   ├── book.routes.ts
│   │   ├── member/
│   │   │   ├── member.controller.ts
│   │   │   ├── member.service.ts
│   │   │   ├── member.routes.ts
│   │   ├── borrow/
│   │   │   ├── borrow.controller.ts
│   │   │   ├── borrow.service.ts
│   │   │   ├── borrow.routes.ts
│   ├── utils/
│       ├── errorHandler.ts
├── prisma/
│   ├── schema.prisma
├── app.ts
├── server.ts
```

---

## 🌟 API Endpoints

### **Books**

- `POST /api/books`: Create a new book.
- `GET /api/books`: Get all books.
- `GET /api/books/:bookId`: Get details of a book by ID.
- `PUT /api/books/:bookId`: Update details of a book by ID.
- `DELETE /api/books/:bookId`: Delete a book by ID.

### **Members**

- `POST /api/members`: Create a new member.
- `GET /api/members`: Get all members.
- `GET /api/members/:memberId`: Get member details by ID.
- `PUT /api/members/:memberId`: Update member details by ID.
- `DELETE /api/members/:memberId`: Delete a member by ID.

### **Borrow & Return**

- `POST /api/borrow`: Borrow a book.
- `POST /api/return`: Return a book.
- `GET /api/borrow/overdue`: Fetch overdue borrowed books.

---

## 📋 Contribution Guidelines

1. Fork the repository and clone it locally.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes with descriptive messages:
   ```bash
   git commit -m "Add feature description"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request and describe the changes.

---
