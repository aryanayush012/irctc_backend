------------------------IRCTC Backend----------------------------------------------------
Project Overview
This project is a railway management system API, inspired by IRCTC, which allows users to check train availability between stations, book seats, and manage trains. The system also supports role-based access, where admins can add and update trains.

The API is optimized to handle concurrent seat booking requests, preventing race conditions by ensuring that only one user can book the last available seat in real-time.

## Tech Stack
Backend Framework: NodeJS & Express
Database: PostgreSQL
Authentication: JWT (JSON Web Tokens) for user login and authorization
API Key: Secured admin access using an API key



## Features

- **User Registration**: Allows users to create an account.
- **User Login**: Users can log into their accounts using email and password.
- **Admin Role**: Admins can add new trains and update seat availability.
- **Seat Availability**: Users can check seat availability between two stations.
- **Seat Booking**: Users can book a seat on a selected train.
- **Booking Details**: Users can retrieve specific booking details using an authorization token.

---

## API Endpoints

### 1. **User Registration** (Public)

- **POST** `/api/register`
- Registers a new user with role (`admin` or `user`).

### 2. **User Login** (Public)

- **POST** `/api/login`
- Logs in a user and returns an authorization token.

### 3. **Add New Train** (Admin Only)

- **POST** `/api/admin/train`
- Adds a new train to the system with source, destination, and total seats.
- Protected by an API key.

### 4. **Get Seat Availability** (Public)

- **GET** `/api/trains?source={source}&destination={destination}`
- Fetches available trains between two stations and their seat availability.

### 5. **Book a Seat** (User)

- **POST** `/api/book`
- Books a seat on a train. Requires user authorization token.

### 6. **Get Booking Details** (User)

- **GET** `/api/booking/{booking_id}`
- Fetches details of a specific booking. Requires user authorization token.

---

## Installation

### Prerequisites

- **Node.js** (for a Node/Express setup)
- **PostgreSQL**
- **npm**

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/railway-management-system.git
   cd railway-management-system
   ```

2. Install dependencies:

   - For **Node.js**:
     ```bash
     npm install
     ```

3. Set up environment variables:

   - Create a `.env` file in the root directory and add the following:
     ```bash
     DB_URL=<your-database-url>
     JWT_SECRET=<your-secret-key>
     ADMIN_API_KEY=<admin-api-key>
     ```

4. Run database migrations to set up the schema:
   - For **Node.js**:
     ```bash
     npm run migrate
     ```

---

## Running the Project

1. Start the backend server:

   - For **Node.js**:
     ```bash
     npm start
     ```

2. The API will be available at `http://localhost:3000`

---

## Database Schema

### Users Table:

| id  | name | email        | password  | role |
| --- | ---- | ------------ | --------- | ---- |
| 1   | John | john@abc.com | hashed_pw | user |

### Trains Table:

| id  | name    | source   | destination | total_seats | available_seats |
| --- | ------- | -------- | ----------- | ----------- | --------------- |
| 1   | Train A | Station1 | Station2    | 100         | 50              |

### Bookings Table:

| id  | user_id | train_id | seat_number | booking_time |
| --- | ------- | -------- | ----------- | ------------ |
| 1   | 1       | 1        | 15          | 2024-09-28   |

---

## Testing

1. You can use tools like **Postman** to test the endpoints.
2. Sample test scripts for API endpoints can be run using:
   - For **Node.js**:
     ```bash
     npm test
     ```

---

## Assumptions

1. **Race Conditions**: I have used database-level transaction locks or distributed locking mechanisms to prevent multiple users from booking the same seat.
2. **Authentication**: JWT tokens are used to authenticate users. Admin API endpoints are protected using API keys.
3. **Real-time Concurrency**: The app is optimized to handle multiple simultaneous seat bookings.

---
