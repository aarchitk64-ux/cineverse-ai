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
        "id": movie.get("id"),
        "title": movie.get("title") or movie.get("name"),
        "type": movie.get("media_type"),
        "overview": movie.get("overview"),
        "rating": movie.get("vote_average"),
        "release_date": movie.get("release_date") or movie.get("first_air_date"),
        "poster": IMAGE_BASE_URL + movie["poster_path"] if movie.get("poster_path") else None,
    }


def get_trending_movies():
    url = f"{BASE_URL}/trending/movie/week"

    params = {
        "api_key": settings.TMDB_API_KEY,
    }

    response = requests.get(url, params=params)
    response.raise_for_status()

    data = response.json()

    movies = []

    for movie in data["results"][:10]:
        movies.append({
            "id": movie["id"],
            "title": movie["title"],
            "poster": IMAGE_BASE_URL + movie["poster_path"] if movie.get("poster_path") else None,
            "rating": movie["vote_average"],
        })

    return movies
def get_movie_details(movie_id: int):
    url = f"{BASE_URL}/movie/{movie_id}"

    params = {
        "api_key": settings.TMDB_API_KEY,
    }

    response = requests.get(url, params=params)
    response.raise_for_status()

    movie = response.json()

    return {
        "id": movie["id"],
        "title": movie["title"],
        "overview": movie["overview"],
        "poster": IMAGE_BASE_URL + movie["poster_path"] if movie.get("poster_path") else None,
        "backdrop": IMAGE_BASE_URL + movie["backdrop_path"] if movie.get("backdrop_path") else None,
        "rating": movie["vote_average"],
        "release_date": movie["release_date"],
        "runtime": movie["runtime"],
        "genres": [genre["name"] for genre in movie["genres"]],
    }
def get_movie_cast(movie_id: int):
    url = f"{BASE_URL}/movie/{movie_id}/credits"

    params = {
        "api_key": settings.TMDB_API_KEY,
    }

    response = requests.get(url, params=params)
    response.raise_for_status()

    data = response.json()

    cast = []

    for actor in data["cast"][:10]:
        cast.append({
            "id": actor["id"],
            "name": actor["name"],
            "character": actor["character"],
            "profile": IMAGE_BASE_URL + actor["profile_path"]
            if actor.get("profile_path")
            else None,
        })

    return cast