from sqlalchemy.orm import Session

from app.database.models import Movie


class MovieRepository:
    def __init__(self, db: Session):
        self.db = db

    def get_all(self):
        return (
            self.db.query(Movie)
            .order_by(Movie.rating.desc())
            .all()
        )

    def get_by_id(self, movie_id: int):
        return (
            self.db.query(Movie)
            .filter(Movie.id == movie_id)
            .first()
        )

    def search(self, query: str):
        return (
            self.db.query(Movie)
            .filter(Movie.title.ilike(f"%{query}%"))
            .all()
        )
