from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.movies import router as movie_router
from app.core.config import settings

app = FastAPI(
    title=settings.APP_NAME,
    version="2.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # Development only
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(movie_router)


@app.get("/")
async def home():
    return {
        "name": settings.APP_NAME,
        "status": "online",
        "version": "2.0.0",
    }


@app.get("/health")
async def health():
    return {
        "status": "healthy"
    }
