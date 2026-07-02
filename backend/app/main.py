from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.movie import router as movie_router
from app.api.character import router as character_router
from app.api.chat import router as chat_router

app = FastAPI(
    title="CineVerse AI API",
    version="1.0.0",
    description="AI-powered Movie & Character Intelligence Platform",
)

# CORS (production-safe)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers
app.include_router(movie_router)
app.include_router(character_router)
app.include_router(chat_router)


@app.get("/")
def root():
    return {
        "message": "CineVerse AI API is running"
    }


@app.get("/health")
def health():
    return {
        "status": "ok"
    }