from fastapi import APIRouter, Depends

from app.core.dependencies import get_current_user

router = APIRouter(
    prefix="/profile",
    tags=["Profile"],
)


@router.get("/me")
def profile(user=Depends(get_current_user)):
    return {
        "success": True,
        "user": user
    }
