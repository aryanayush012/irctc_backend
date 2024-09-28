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
