"use client";

import { useEffect, useRef, useState } from "react";
import { SendHorizontal } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => Promise<void>;
  loading: boolean;
}

export default function ChatInput({
  onSend,
  loading,
}: ChatInputProps) {
  const [message, setMessage] = useState("");

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!textareaRef.current) return;

    textareaRef.current.style.height = "0px";
    textareaRef.current.style.height =
      textareaRef.current.scrollHeight + "px";
  }, [message]);

  async function handleSend() {
    const text = message.trim();

    if (!text || loading) return;

    await onSend(text);

    setMessage("");

    requestAnimationFrame(() => {
      textareaRef.current?.focus();
    });
  }

  async function handleKeyDown(
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      await handleSend();
    }
  }

  return (
    <div className="border-t border-zinc-800 bg-zinc-950 p-4">
      <div className="flex items-end gap-3 rounded-2xl border border-zinc-700 bg-zinc-900 p-3">
        <textarea
          ref={textareaRef}
          rows={1}
          value={message}
          disabled={loading}
          placeholder="Ask anything about this character..."
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          className="max-h-40 flex-1 resize-none overflow-y-auto bg-transparent text-white outline-none placeholder:text-zinc-500"
        />

        <button
          onClick={handleSend}
          disabled={loading || !message.trim()}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <SendHorizontal size={20} />
        </button>
      </div>

      <p className="mt-2 text-right text-xs text-zinc-500">
        Enter to send • Shift + Enter for new line
      </p>
    </div>
  );
}