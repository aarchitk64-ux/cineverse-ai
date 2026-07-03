"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import TypingIndicator from "./TypingIndicator";

import { sendChatMessage } from "@/services/chat";
import type { ChatMessage as ChatMessageType } from "@/types/chat";

interface ChatBoxProps {
  movieId: number;
  personId: number;
  characterName: string;
}

const SUGGESTED_PROMPTS = [
  "What is your role in the story?",
  "What is your biggest goal?",
  "Who is your greatest enemy?",
  "Describe your personality.",
  "What is your backstory?",
];

export default function ChatBox({
  movieId,
  personId,
  characterName,
}: ChatBoxProps) {
  const storageKey = useMemo(
    () => `cineverse-chat-${movieId}-${personId}`,
    [movieId, personId]
  );

  const bottomRef = useRef<HTMLDivElement>(null);

 const welcomeMessage: ChatMessageType = {
  id: crypto.randomUUID(),
  role: "assistant",
  content: `Hello! Feel free to ask me anything about my story, relationships, motivations, adventures, or the world I live in.`,
  timestamp: new Date().toISOString(),
};
  const [messages, setMessages] = useState<ChatMessageType[]>([
    welcomeMessage,
  ]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);

    if (saved) {
      try {
        const parsed: ChatMessageType[] = JSON.parse(saved);

        if (parsed.length) {
          setMessages(parsed);
          return;
        }
      } catch (err) {
        console.error(err);
      }
    }

    setMessages([welcomeMessage]);
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(messages));
  }, [messages, storageKey]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function handleSend(text: string) {
    if (loading) return;

    const userMessage: ChatMessageType = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      const response = await sendChatMessage(
        movieId,
        personId,
        {
          message: text,
        }
      );

      const aiMessage: ChatMessageType = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: response.reply,
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            "Sorry, I couldn't generate a response right now. Please try again.",
          timestamp: new Date().toISOString(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function clearChat() {
    localStorage.removeItem(storageKey);
    setMessages([welcomeMessage]);
  }

  return (
    <div className="flex h-[80vh] flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-xl">
      <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-4">
        <div>
          <h2 className="text-xl font-bold text-white">
            Chat with {characterName}
          </h2>

          <p className="text-sm text-zinc-400">
            AI-powered character conversation
          </p>
        </div>

        <button
          onClick={clearChat}
          className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:border-red-500 hover:text-red-400"
        >
          Clear Chat
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        {messages.length === 1 && (
          <div className="mb-8 flex flex-wrap gap-3">
            {SUGGESTED_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                disabled={loading}
                onClick={() => handleSend(prompt)}
                className="rounded-full border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm text-zinc-300 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white disabled:opacity-50"
              >
                {prompt}
              </button>
            ))}
          </div>
        )}

        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
          />
        ))}

        {loading && <TypingIndicator />}

        <div ref={bottomRef} />
      </div>

      <ChatInput
        onSend={handleSend}
        loading={loading}
      />
    </div>
  );
}