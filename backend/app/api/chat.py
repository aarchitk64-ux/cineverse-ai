from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.services.tmdb import get_character_from_movie
from app.services.chat_service import chat_with_character

router = APIRouter()


class ChatRequest(BaseModel):
    message: str


@router.post("/chat/{movie_id}/{person_id}")
def chat(
    movie_id: int,
    person_id: int,
    body: ChatRequest,
):
    character = get_character_from_movie(
        movie_id,
        person_id,
    )

    if not character:
        raise HTTPException(
            status_code=404,
            detail="Character not found.",
        )

    return chat_with_character(
        movie=character["movie_title"],
        character=character["character_name"],
        message=body.message,
    )