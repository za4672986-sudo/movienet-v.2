from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.dependencies import get_current_user
from app.database.database import get_db
from app.repositories.watchlist_repository import WatchlistRepository

router = APIRouter(
    prefix="/watchlist",
    tags=["Watchlist"],
)


@router.post("/{movie_id}")
def add_movie(
    movie_id: int,
    db: Session = Depends(get_db),
    user=Depends(get_current_user),
):
    repo = WatchlistRepository(db)

    return repo.add(
        user["user_id"],
        movie_id,
    )


@router.get("/")
def my_watchlist(
    db: Session = Depends(get_db),
    user=Depends(get_current_user),
):
    repo = WatchlistRepository(db)

    return repo.get_all(
        user["user_id"]
    )
