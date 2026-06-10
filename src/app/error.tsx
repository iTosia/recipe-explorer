"use client";

interface Props {
    error: Error;
    reset: () => void;
}

export default function ErrorPage({
    error,
    reset,
}: Props) {
    return (
        <div className="space-y-6 text-center">
            <h1 className="text-5xl font-bold">
                Something went wrong
            </h1>

            <p>{error.message}</p>

            <button
                onClick={reset}
                className="rounded bg-red-600 px-4 py-2 text-white"
            >
                Try again
            </button>
        </div>
    );
}
