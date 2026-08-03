from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    APP_NAME: str = "MovieNet API"
    APP_VERSION: str = "1.0.0"

    DEBUG: bool = True

    DATABASE_URL: str = "sqlite:///./movienet.db"

    JWT_SECRET_KEY: str = "CHANGE_THIS_IN_PRODUCTION"
    JWT_ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 12

    FRONTEND_URL: str = "http://localhost:3000"

    model_config = SettingsConfigDict(
        env_file=".env",
        extra="ignore",
    )


settings = Settings()
