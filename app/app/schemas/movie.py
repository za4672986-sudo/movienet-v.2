from pydantic import BaseModel


class Movie(BaseModel):
    id: int
    title: str
    poster: str
    overview: str
    rating: float
    year: str
