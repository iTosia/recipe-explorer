export default function SkeletonCard() {
    return (
        <article className="rounded-lg border p-4">
            <div className="h-52 animate-pulse rounded bg-gray-200" />

            <div className="mt-4 h-6 w-40 animate-pulse rounded bg-gray-200" />

            <div className="mt-4 h-10 animate-pulse rounded bg-gray-200" />
        </article>
    );
}
