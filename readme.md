------------------------IRCTC Backend----------------------------------------------------
Project Overview
This project is a railway management system API, inspired by IRCTC, which allows users to check train availability between stations, book seats, and manage trains. The system also supports role-based access, where admins can add and update trains.

The API is optimized to handle concurrent seat booking requests, preventing race conditions by ensuring that only one user can book the last available seat in real-time.

Tech Stack
Backend Framework: NodeJS & Express
Database: PostgreSQL
Authentication: JWT (JSON Web Tokens) for user login and authorization
API Key: Secured admin access using an API key
