from fastapi import APIRouter, HTTPException

from app.services.tmdb import get_character_from_movie
from app.services.groq import analyze_character

router = APIRouter()


@router.get("/character/{movie_id}/{person_id}")
def get_character(movie_id: int, person_id: int):
    character = get_character_from_movie(movie_id, person_id)

    if not character:
        raise HTTPException(
            status_code=404,
            detail="Character not found.",
        )

    analysis = analyze_character(
        movie=character["movie_title"] or "Unknown Movie",
        character=character["character_name"],
    )

    return {
        "character": character,
        "analysis": analysis,
    }