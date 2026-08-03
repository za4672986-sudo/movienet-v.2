from sqlalchemy import Column, Float, Integer, String

from app.database.base import Base


class Movie(Base):
    __tablename__ = "movies"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    poster = Column(String(500))
    overview = Column(String(2000))
    rating = Column(Float)
    year = Column(String(10))
