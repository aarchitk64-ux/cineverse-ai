def build_character_prompt(movie: str, character: str) -> str:
    return f"""
You are an expert movie analyst.

Movie:
{movie}

Character:
{character}

Return ONLY valid JSON.

Use this schema exactly:

{{
  "background": "...",
  "personality": "...",
  "motivations": "...",
  "relationships": "...",
  "timeline": "...",
  "strengths": "...",
  "weaknesses": "..."
}}

Rules:

- Do not use markdown.
- Do not use triple backticks.
- Do not explain anything.
- Return only JSON.
- Keep each field between 50 and 120 words.
"""