"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Something went wrong</h1>
            <p className="mt-2 text-zinc-600">{error.message}</p>
            <button
              onClick={reset}
              className="mt-4 rounded-full bg-zinc-900 px-4 py-2 text-sm text-white hover:bg-zinc-700"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
