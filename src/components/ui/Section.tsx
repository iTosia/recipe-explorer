interface Props {
    children: React.ReactNode;
}

export default function Section({
    children,
}: Props) {
    return (
        <section className="space-y-8">
            {children}
        </section>
    );
}
