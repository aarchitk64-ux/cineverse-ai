from dotenv import load_dotenv
import os

load_dotenv()

class Settings:
    TMDB_API_KEY = os.getenv("TMDB_API_KEY")

settings = Settings()