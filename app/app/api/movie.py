from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.services.movie_service import MovieService

router = APIRouter(
    prefix="/movies",
    tags=["Movies"],
)


@router.get("/trending")
def trending(db: Session = Depends(get_db)):
    return MovieService(db).trending()


@router.get("/search")
def search(
    q: str,
    db: Session = Depends(get_db),
):
    return MovieService(db).search(q)


@router.get("/{movie_id}")
def details(
    movie_id: int,
    db: Session = Depends(get_db),
):
    return MovieService(db).details(movie_id)
