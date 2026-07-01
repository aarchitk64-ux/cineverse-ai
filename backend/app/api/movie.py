from fastapi import APIRouter

from app.services.tmdb import search_movie

router = APIRouter()


@router.get("/movie/{query}")
def get_movie(query: str):
    return search_movie(query)