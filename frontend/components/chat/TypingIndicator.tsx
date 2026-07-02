export default function TypingIndicator() {
  return (
    <div className="flex w-full justify-start mb-4">
      <div className="rounded-2xl rounded-bl-md bg-zinc-800 px-4 py-3 shadow-md">
        <div className="flex items-center gap-2">
          <span className="text-sm text-zinc-300">
            Character is thinking
          </span>

          <div className="flex gap-1">
            <span
              className="h-2 w-2 animate-bounce rounded-full bg-blue-400"
              style={{ animationDelay: "0ms" }}
            />

            <span
              className="h-2 w-2 animate-bounce rounded-full bg-blue-400"
              style={{ animationDelay: "150ms" }}
            />

            <span
              className="h-2 w-2 animate-bounce rounded-full bg-blue-400"
              style={{ animationDelay: "300ms" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}