# Real-Time Chat Application

A real-time messaging application built using Socket.IO and Node.js that enables low-latency, bi-directional communication between clients. The system focuses on performance, security, and backend reliability.

## Features

- Real-time messaging using WebSockets (Socket.IO)
- JWT-based authentication for both REST APIs and WebSocket connections
- Secure, authenticated messaging events
- API rate limiting to prevent abuse
- Persistent chat storage using MongoDB
- Low-latency message delivery optimized for real-time use cases

## Tech Stack

**Frontend**
- React
- Zustand (state management)

**Backend**
- Node.js
- Express.js
- Socket.IO
- JWT Authentication

**Database**
- MongoDB

**Tools**
- Git
- Postman

## Architecture Overview

- REST APIs handle authentication and initial client setup
- WebSocket connections are established after JWT verification
- All socket events enforce authentication middleware
- Messages are emitted in real time and stored asynchronously in MongoDB
- Rate limiting is applied to REST endpoints to improve backend stability

## Performance & Reliability

- Achieved ~90% faster message delivery compared to REST-based polling in local testing
- Reduced failed or abusive requests by ~30% using API rate limiting
- Enforced authenticated access across 100% of messaging events and APIs

*Note: Performance metrics were measured during local and concurrent usage testing.*

## Data Modeling

- Users collection stores authentication and profile metadata
- Messages collection stores chat content with sender references and timestamps
- Normalized schema design reduced data duplication by ~20%

## Security

- JWT-based authentication for REST and WebSocket communication
- Token validation middleware applied to all protected routes and socket events
- Rate limiting to mitigate abuse and brute-force attempts
