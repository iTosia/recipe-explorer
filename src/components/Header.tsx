import Link from "next/link";
import { navigation } from "@/constants/navigation";

export default function Header() {
    return (
        <header className="border-b bg-white shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <h1 className="text-2xl font-bold text-green-700">
                    🍳 Recipe Explorer
                </h1>

                <nav>
                    <ul className="flex gap-6">
                        {navigation.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className="transition-colors text-gray-700 hover:text-green-700"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}