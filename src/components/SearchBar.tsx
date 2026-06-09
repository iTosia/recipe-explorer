"use client";

import {
    useRouter,
    useSearchParams,
} from "next/navigation";

import { useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { useEffect } from "react";

export default function SearchBar() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentSearch = searchParams.get("search") ?? "";
    const [value, setValue] = useState(currentSearch);
    const debounced = useDebounce(value);

    useEffect(() => {

        if (!debounced) {
            router.push("/");
            return;
        }

        router.replace(`/?search=${debounced}`);

    }, [debounced, router]);

    return (
        <input
            value={value}
            onChange={(e) =>
                setValue(e.target.value)
            }
            placeholder="Search..."
            className="w-full rounded-lg border p-4"
        />
    );
}
