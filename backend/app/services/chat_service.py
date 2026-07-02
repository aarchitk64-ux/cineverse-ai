import os

from openai import OpenAI

from app.prompts.chat_prompt import build_chat_prompt

client = OpenAI(
    api_key=os.getenv("GROQ_API_KEY"),
    base_url="https://api.groq.com/openai/v1",
)


def chat_with_character(
    movie: str,
    character: str,
    message: str,
):
    prompt = build_chat_prompt(
        movie=movie,
        character=character,
        message=message,
    )

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "system",
                "content": f"You are {character} from {movie}. Stay in character at all times.",
            },
            {
                "role": "user",
                "content": prompt,
            },
        ],
        temperature=0.8,
        max_tokens=400,
    )

    return {
        "reply": response.choices[0].message.content.strip()
    }