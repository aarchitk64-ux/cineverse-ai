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
        "poster": IMAGE_BASE_URL + movie["poster_path"]
        if movie.get("poster_path")
        else None,
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
        movies.append(
            {
                "id": movie["id"],
                "title": movie["title"],
                "poster": IMAGE_BASE_URL + movie["poster_path"]
                if movie.get("poster_path")
                else None,
                "rating": movie["vote_average"],
            }
        )

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
        "poster": IMAGE_BASE_URL + movie["poster_path"]
        if movie.get("poster_path")
        else None,
        "backdrop": IMAGE_BASE_URL + movie["backdrop_path"]
        if movie.get("backdrop_path")
        else None,
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

    for person in data["cast"][:15]:
        cast.append(
            {
                "id": person["id"],
                "name": person["name"],
                "character": person["character"],
                "profile": IMAGE_BASE_URL + person["profile_path"]
                if person.get("profile_path")
                else None,
            }
        )

    return cast


def get_character_from_movie(
    movie_id: int,
    person_id: int,
):
    url = f"{BASE_URL}/movie/{movie_id}/credits"

    params = {
        "api_key": settings.TMDB_API_KEY,
    }

    response = requests.get(url, params=params)
    response.raise_for_status()

    credits = response.json()

    movie_response = requests.get(
        f"{BASE_URL}/movie/{movie_id}",
        params=params,
    )
    movie_response.raise_for_status()

    movie = movie_response.json()

    for person in credits["cast"]:
        if person["id"] == person_id:
            return {
                "movie_id": movie_id,
                "movie_title": movie["title"],
                "person_id": person["id"],
                "actor_name": person["name"],
                "character_name": person["character"],
                "profile": IMAGE_BASE_URL + person["profile_path"]
                if person.get("profile_path")
                else None,
            }

    return None