interface Props {
    title: string;
}

export default function EmptyState({
    title,
}: Props) {
    return (
        <div className="py-20 text-center">
            <h2 className="text-3xl font-bold">
                {title}
            </h2>
        </div>
    );
}
