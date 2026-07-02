from dotenv import load_dotenv
import os

load_dotenv()


class Settings:
    TMDB_API_KEY: str = os.getenv("TMDB_API_KEY", "")
    GROQ_API_KEY: str = os.getenv("GROQ_API_KEY", "")


settings = Settings()