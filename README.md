# Node.js + MongoDB Dockerized App 🚀

A simple RESTful API built with **Node.js** and **Express**, connected to **MongoDB**, and fully containerized using **Docker** and **Docker Compose**.

This project demonstrates how to:

- Containerize a Node.js app
- Connect it to a MongoDB service
- Run and manage the app using Docker Compose

---

## 🌐 API Endpoints

- `GET /` → Returns a welcome message
- `POST /messages` → Creates a message in MongoDB
- `GET /messages` → Retrieves all messages

---

## 📁 Project Setup

```bash
.
├── app.js                 # Express app with MongoDB connection
├── package.json           # App dependencies and start script
├── Dockerfile             # Defines how to containerize the app
├── docker-compose.yml     # Orchestrates the app + MongoDB services
├── .dockerignore          # Excludes files from being copied to the image
```

---

## 💪 Getting Started

### 1. Clone the project

```bash
git clone https://github.com/your-username/node-mongo-docker-app.git
cd node-mongo-docker-app
```

### 2. Start the app with Docker Compose

```bash
docker-compose up --build
```

### 3. Test the API

Visit:

- `http://localhost:3000/` → Hello message

Send requests:

```bash
curl -X POST http://localhost:3000/messages \
  -H 'Content-Type: application/json' \
  -d '{"text": "Hello Docker!"}'

curl http://localhost:3000/messages
```

---

## 🚀 Docker & Compose Details

### Dockerfile

- Based on `node:18-alpine`
- Installs dependencies and runs the app
- Exposes port 3000

### docker-compose.yml

- Defines two services: `app` and `mongo`
- Mongo uses the official `mongo` image
- Networked together under `app-network`
- MongoDB data persisted with named volume `mongo-data`

---

## 🚫 .dockerignore

Excludes unnecessary files from the Docker image:

```
node_modules
npm-debug.log
Dockerfile
docker-compose.yml
.git
.gitignore
README.md
.env
```

---

## 🔧 Dev Tips

- You can rebuild the app at any time with:

```bash
docker-compose up --build
```

- To stop all containers:

```bash
docker-compose down
```

- You can access Mongo shell (optional):

```bash
docker exec -it mongo mongosh
```

---

## 👨‍💻 Author

[Youssef Safwat](https://github.com/Usf277)
