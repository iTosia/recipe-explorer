import "./globals.css";

import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QueryProvider from "@/providers/QueryProvider";

export const metadata: Metadata = {
    title: "Recipe Explorer",
    description: "Search recipes with Next.js",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-gray-100">
                <div className="flex min-h-screen flex-col">
                    <Header />

                    <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-8">
                        <QueryProvider>
                            {children}
                        </QueryProvider>
                    </main>

                    <Footer />
                </div>
            </body>
        </html>
    );
}
