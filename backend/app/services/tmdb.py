import requests

from app.core.config import settings

BASE_URL = "https://api.themoviedb.org/3"
IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"


def search_movie(query: str):

    url = f"{BASE_URL}/search/multi"

    params = {
        "api_key": settings.TMDB_API_KEY,
        "query": query,
    }

    response = requests.get(url, params=params)
    response.raise_for_status()

    data = response.json()

    if not data["results"]:
        return {
            "error": "Movie or TV series not found."
        }

    movie = data["results"][0]

    return {
        "title": movie.get("title") or movie.get("name"),
        "type": movie.get("media_type"),
        "overview": movie.get("overview"),
        "rating": movie.get("vote_average"),
        "release_date": movie.get("release_date") or movie.get("first_air_date"),
        "poster": IMAGE_BASE_URL + movie["poster_path"] if movie.get("poster_path") else None,
    }