from sqlalchemy.orm import Session

from app.database.watchlist_model import Watchlist


class WatchlistRepository:

    def __init__(self, db: Session):
        self.db = db

    def add(self, user_id: int, movie_id: int):

        item = Watchlist(
            user_id=user_id,
            movie_id=movie_id,
        )

        self.db.add(item)

        self.db.commit()

        self.db.refresh(item)

        return item

    def get_all(self, user_id: int):

        return (
            self.db.query(Watchlist)
            .filter(
                Watchlist.user_id == user_id
            )
            .all()
        )
