from fastapi import APIRouter
from app.services.tmdb import (
    search_movie,
    get_trending_movies,
    get_movie_details,
    get_movie_cast,
)
from app.services.tmdb import (
    search_movie,
    get_trending_movies,
    get_movie_details,
)

router = APIRouter()


@router.get("/movie/{query}")
def get_movie(query: str):
    return search_movie(query)


@router.get("/trending")
def trending_movies():
    return get_trending_movies()

@router.get("/details/{movie_id}")
def movie_details(movie_id: int):
    return get_movie_details(movie_id)

@router.get("/cast/{movie_id}")
def movie_cast(movie_id: int):
    return get_movie_cast(movie_id)