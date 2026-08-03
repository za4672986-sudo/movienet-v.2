from fastapi import HTTPException

from app.core.security import (
    create_access_token,
    hash_password,
    verify_password,
)
from app.database.user_model import User
from app.repositories.user_repository import UserRepository


class AuthService:

    def __init__(self, repo: UserRepository):
        self.repo = repo

    def register(self, data):

        if self.repo.find_by_email(data.email):
            raise HTTPException(
                status_code=400,
                detail="Email already exists",
            )

        user = User(
            username=data.username,
            email=data.email,
            password=hash_password(data.password),
        )

        self.repo.create(user)

        return {
            "message": "Registration successful"
        }

    def login(self, data):

        user = self.repo.find_by_email(data.email)

        if not user:
            raise HTTPException(
                status_code=401,
                detail="Invalid credentials",
            )

        if not verify_password(
            data.password,
            user.password,
        ):
            raise HTTPException(
                status_code=401,
                detail="Invalid credentials",
            )

        token = create_access_token(
            {
                "sub": str(user.id)
            }
        )

        return {
            "access_token": token,
            "token_type": "bearer",
        }
