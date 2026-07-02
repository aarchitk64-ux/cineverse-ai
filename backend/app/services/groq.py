import json
import os
from app.core.config import settings

from openai import OpenAI

from app.prompts.character_prompt import build_character_prompt

client = OpenAI(
    api_key=settings.GROQ_API_KEY,
    base_url="https://api.groq.com/openai/v1",
)


def analyze_character(movie: str, character: str):
    prompt = build_character_prompt(movie, character)

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "system",
                "content": "You are an expert movie analyst.",
            },
            {
                "role": "user",
                "content": prompt,
            },
        ],
        temperature=0.5,
    )

    content = response.choices[0].message.content.strip()

    # Remove markdown if the model returns it
    content = content.replace("```json", "").replace("```", "").strip()

    try:
        return json.loads(content)

    except json.JSONDecodeError:
        return {
            "background": content,
            "personality": "",
            "motivations": "",
            "relationships": "",
            "timeline": "",
            "strengths": "",
            "weaknesses": "",
        }