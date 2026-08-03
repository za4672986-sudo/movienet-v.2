from app.database.base import Base
from app.database.database import engine

from app.database.models import Movie
from app.database.user_model import User
from app.database.watchlist_model import Watchlist
from app.database.favorite_model import Favorite


def init_database():
    Base.metadata.create_all(
        bind=engine
    )
