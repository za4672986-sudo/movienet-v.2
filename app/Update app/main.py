from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.movies import router as movie_router
from app.api.auth import router as auth_router
from app.api.profile import router as profile_router
from app.api.watchlist import router as watchlist_router
from app.api.favorites import router as favorite_router

from app.core.config import settings
from app.database.init_db import init_database


@asynccontextmanager
async def lifespan(app: FastAPI):

    init_database()

    yield


app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    lifespan=lifespan,
)


app.add_middleware(
    CORSMiddleware,

    allow_origins=[
        settings.FRONTEND_URL
    ],

    allow_credentials=True,

    allow_methods=[
        "*"
    ],

    allow_headers=[
        "*"
    ],
)


app.include_router(
    movie_router
)

app.include_router(
    auth_router
)

app.include_router(
    profile_router
)

app.include_router(
    watchlist_router
)

app.include_router(
    favorite_router
)


@app.get("/")
async def root():

    return {
        "success": True,
        "name": settings.APP_NAME,
        "version": settings.APP_VERSION,
        "status": "online",
    }


@app.get("/health")
async def health():

    return {
        "success": True,
        "status": "healthy",
    }
        )
