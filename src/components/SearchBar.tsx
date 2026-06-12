"use client";

import { useEffect, useTransition, useDeferredValue } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { searchSchema, SearchSchema } from "@/schemas/search.schema";

export default function SearchBar() {
    const router = useRouter();

    const searchParams = useSearchParams();

    const [isPending, startTransition] = useTransition();

    const currentSearch = searchParams.get("search") ?? "";

    const { register, watch, setValue } = useForm<SearchSchema>({
        resolver: zodResolver(searchSchema),
        defaultValues: {
            search: currentSearch,
        },
    });

    const value = watch("search");
    const deferredValue = useDeferredValue(value);

    useEffect(() => {
        startTransition(() => {
            if (!deferredValue) {
                router.replace("/");
                return;
            }

            router.replace(`/?search=${encodeURIComponent(deferredValue)}`);
        });
    }, [deferredValue, router]);

    useEffect(() => {
        setValue(
            "search",
            currentSearch
        );
    }, [currentSearch, setValue]);

    return (
        <div className="space-y-2">
            <input
                {...register("search")}
                placeholder="Search recipes..."
                className="w-full rounded-lg border p-4"
            />

            {isPending && (
                <p className="text-sm text-gray-500">
                    Searching...
                </p>
            )}
        </div>
    );
}
