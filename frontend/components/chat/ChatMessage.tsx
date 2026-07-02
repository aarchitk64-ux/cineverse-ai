"use client";

import { useState } from "react";
import { User, Bot, Copy, Check } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { ChatMessage as ChatMessageType } from "@/types/chat";

interface ChatMessageProps {
  message: ChatMessageType;
}

export default function ChatMessage({
  message,
}: ChatMessageProps) {
  const isUser = message.role === "user";

  const [copied, setCopied] = useState(false);

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(message.content);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div
      className={`mb-6 flex items-end gap-3 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-600">
          <Bot size={20} />
        </div>
      )}

      <div
        className={`group relative max-w-[85%] rounded-2xl px-5 py-4 shadow-lg transition-all duration-200 ${
          isUser
            ? "rounded-br-md bg-blue-600 text-white"
            : "rounded-bl-md border border-zinc-700 bg-zinc-900 text-white"
        }`}
      >
        <button
          onClick={copyMessage}
          className="absolute right-3 top-3 opacity-0 transition-opacity group-hover:opacity-100"
        >
          {copied ? (
            <Check
              size={16}
              className="text-green-400"
            />
          ) : (
            <Copy
              size={16}
              className="text-slate-400 hover:text-white"
            />
          )}
        </button>

        <div className="prose prose-invert max-w-none break-words">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code(props) {
                const { children } = props;

                return (
                  <code className="rounded bg-black/40 px-1 py-0.5 text-blue-300">
                    {children}
                  </code>
                );
              },

              pre({ children }) {
                return (
                  <pre className="my-4 overflow-x-auto rounded-xl bg-black p-4">
                    {children}
                  </pre>
                );
              },
            }}
          >
            {message.content}
          </ReactMarkdown>
        </div>

        <div
          className={`mt-3 text-xs ${
            isUser
              ? "text-blue-100"
              : "text-slate-400"
          }`}
        >
          {new Date(message.timestamp).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>

      {isUser && (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600">
          <User size={20} />
        </div>
      )}
    </div>
  );
}