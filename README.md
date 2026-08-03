# 🎬 MovieNet V2

MovieNet V2 is a modern Netflix-inspired movie discovery platform built with Next.js and FastAPI.

## Features

- Modern UI
- Responsive Design
- Fast Search
- Movie Details
- Trailers (where available)
- Authentication
- Watchlist
- Continue Watching
- Dark Mode
- Docker Support

## Tech Stack

Frontend

- Next.js
- Tailwind CSS
- TypeScript
- Framer Motion

Backend

- FastAPI
- PostgreSQL
- JWT Authentication
- Redis Cache

## Installation

Frontend

```bash
cd frontend
npm install
npm run dev
```

Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## Docker

```bash
docker-compose up --build
```

## Project Structure

```
frontend/
backend/
docs/
```

## License

MIT
