from fastapi import APIRouter

from app.services.movie_service import get_trending_movies

router = APIRouter(prefix="/movies", tags=["Movies"])


@router.get("/trending")
async def trending():
    return await get_trending_movies()
