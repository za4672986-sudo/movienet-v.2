from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.repositories.user_repository import UserRepository
from app.schemas.user import UserLogin, UserRegister
from app.services.auth_service import AuthService

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)


@router.post("/register")
def register(
    data: UserRegister,
    db: Session = Depends(get_db),
):
    repo = UserRepository(db)

    return AuthService(repo).register(data)


@router.post("/login")
def login(
    data: UserLogin,
    db: Session = Depends(get_db),
):
    repo = UserRepository(db)

    return AuthService(repo).login(data)
