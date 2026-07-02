const API_BASE_URL = "http://127.0.0.1:8000";

import type { ChatRequest, ChatResponse } from "@/types/chat";

export async function sendChatMessage(
  movieId: number,
  personId: number,
  body: ChatRequest
): Promise<ChatResponse> {
  const response = await fetch(
    `${API_BASE_URL}/chat/${movieId}/${personId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to send chat message.");
  }

  return response.json();
}