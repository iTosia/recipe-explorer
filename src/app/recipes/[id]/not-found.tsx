import Link from "next/link";

export default function NotFound() {
    return (
        <div className="space-y-6 text-center">
            <h1 className="text-5xl font-bold">
                404
            </h1>

            <p>Recipe not found.</p>

            <Link
                href="/"
                className="text-green-700 underline"
            >
                Back to Home
            </Link>
        </div>
    );
}
