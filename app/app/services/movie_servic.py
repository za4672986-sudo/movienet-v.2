from sqlalchemy.orm import Session

from app.repositories.movie_repository import MovieRepository


class MovieService:
    def __init__(self, db: Session):
        self.repo = MovieRepository(db)

    def trending(self):
        return self.repo.get_all()

    def details(self, movie_id: int):
        return self.repo.get_by_id(movie_id)

    def search(self, query: str):
        return self.repo.search(query)
