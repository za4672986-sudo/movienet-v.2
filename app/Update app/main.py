from app.database.base import Base
from app.database.database import engine
from app.core.exceptions import global_exception_handler
from app.api.profile import router as profile_router
from app.api.watchlist import router as watchlist_router
app.include_router(profile_router)
app.include_router(watchlist_router)
